package main

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"log"
	rndm "math/rand"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/gorilla/mux"
)

const PORT = ":9000"

var tmpl = template.Must(template.ParseGlob("*.html"))
var uploadPath = "./giants"
var thumbPath = "./thumbs"

const MAX_UPLOAD_SIZE = 10 * 1024 * 1024 // 1MB

func main() {
	HandleRoutes()
	return
}

func HandleRoutes() {
	router := mux.NewRouter()
	router.HandleFunc("/", Index)
	router.HandleFunc("/@{UserName}", Index)
	router.HandleFunc("/@ellygator/manage/gifs", Index)
	router.HandleFunc("/upload", UploadFileHandler).Methods("POST")
	router.HandleFunc("/upload", Index).Methods("GET")
	router.HandleFunc("/create", Index).Methods("GET")
	router.HandleFunc("/gifs/search/csgo", Index).Methods("GET")
	router.HandleFunc("/me/subscription", Index)
	router.HandleFunc("/upload/results", Index)
	router.HandleFunc("/v1/gfycats/fetch/status/{FileName}", Status)
	router.HandleFunc("/v1/gfycats/exist/{FileName}", FilePresence)
	router.HandleFunc("/v1/gfycats", Name).Methods("POST")
	router.HandleFunc("/{FileName}", Res).Methods("GET")
	router.HandleFunc("/ifr/{FileName}", IFR).Methods("GET")
	//~ router.HandleFunc("/amp/{FileName}", AMP).Methods("GET")
	router.HandleFunc("/v1/gfycats/{GifName}/key/{Key}", Delete).Methods("DELETE")
	router.HandleFunc("/v1/me/gfycats/{GifName}/published", Delete).Methods("DELETE")
	router.HandleFunc("/viewall", ViewAllFiles).Methods("GET")
	router.HandleFunc("/del/{PostId}", DeleteFile).Methods("DELETE")
	router.HandleFunc("/v1/users/{userid}", UserProfileFunction).Methods("GET")
	router.HandleFunc("/v1/me", MeFunc).Methods("GET")
	router.HandleFunc("/v1/gfycats/fetch/status", FetchStatusFunction).Methods("GET")

	//	---
	router.HandleFunc("/oauth/weblogin", WebloginFunction).Methods("POST") 
	router.HandleFunc("/oauth/webtoken", WebtokenFunction).Methods("POST") 
	router.HandleFunc("/oauth/token", OauthToken).Methods("POST") 
	router.HandleFunc("/oauth/weblogin/webtoken", WebtokenFunction).Methods("POST")
	router.HandleFunc("/oauth/weblogin/weblogin", WebloginFunction).Methods("POST")
	router.HandleFunc("/login", Index).Methods("GET")
    router.HandleFunc("/login", Index).Methods("POST")
    router.HandleFunc("/signup", Index).Methods("GET")
    router.HandleFunc("/signup", Index).Methods("POST")
		
	router.HandleFunc("/v1/oauth/changepassword", ChangePassword).Methods("POST")
	router.HandleFunc("/v1/me/password", MyPassword).Methods("POST")
	router.HandleFunc("/v1/gfycats/trending", Trending).Methods("GET")
	router.HandleFunc("/v1/users/leaderboard/weekly", Leaderboard).Methods("GET")
	router.HandleFunc("/v1/me", Me).Methods("GET")
	router.HandleFunc("/v1/me", MePatch).Methods("PATCH")
	router.HandleFunc("/v1/me/email", MeEmail).Methods("PUT")
	router.HandleFunc("/v1/me/profile_image_url", MeProfile_image_url).Methods("POST")
	router.HandleFunc("/v1/me/gfycats", MyGifs).Methods("GET")
	router.HandleFunc("/v1/me/collections/{collectionName}/contents", MeCollectionContents).Methods("GET")
	router.HandleFunc("/v1/me/gfycats/{FileName}/like", MeLike).Methods("PUT")
	router.HandleFunc("/v1/me/follows/populated", MeFollowsGfycats).Methods("GET")
	router.HandleFunc("/v1/me/follows/gfycats", MeFollowsGfycats).Methods("GET")
	router.HandleFunc("/v1/featured/discover/populated", MeFollowsGfycats).Methods("GET")
	router.HandleFunc("/discover", MeFollowsGfycats).Methods("GET")
	router.HandleFunc("/v1/me/follows/{UserName}", MeFollowsUser).Methods("PUT", "DELETE")
	router.HandleFunc("/v1/me/collections", MeCollections).Methods("GET")
	router.HandleFunc("/v1/me/gfycats/{FileURL}", DeleteGif).Methods("DELETE")//{"value":["Seoyeon"]}
	router.HandleFunc("/v1/me/gfycats/{FileURL}/tags", AddTag).Methods("PUT")//{"value":["Seoyeon"]}
	router.HandleFunc("/v1/me/gfycats/{FileURL}/title", AddTitle).Methods("PUT")//{"value":"(fromis_9 ep-6) [youtube@MUZbTd8I8K4]-8"}
	router.HandleFunc("/v1/me/subscription", Subscription).Methods("GET")
	router.HandleFunc("/v1/users/{UserName}", UserProfile).Methods("GET")
	router.HandleFunc("/v1/users/{UserName}/gfycats", UserGifs).Methods("GET")
	router.HandleFunc("/v1/users/{UserName}/collections", UserCollections).Methods("GET")
	router.HandleFunc("/v1/users/{UserName}/likes/populated", UserLikes).Methods("GET")
	router.HandleFunc("/v1/gfycats/search", Search).Methods("GET")
	router.HandleFunc("/v1/gfycats/{FileURL}/report", Report).Methods("GET") 
	router.HandleFunc("/v1/tags/trending", TrendingTags).Methods("GET") 
	//Request : {"pageUrl":"https://gfycat.com/daringidleadamsstaghornedbeetle","report":"Suggestive/provocative"}
	// Response : {"reported": "daringidleadamsstaghornedbeetle"}
	// https://weblogin.gfycat.com/oauth/webtoken

    router.HandleFunc("/settings/account", Index).Methods("GET")
	//	---

	router.PathPrefix("/gifs/").Handler(http.StripPrefix("/gifs/", http.FileServer(http.Dir("./gifs"))))
	router.PathPrefix("/posters/").Handler(http.StripPrefix("/posters/", http.FileServer(http.Dir("./posters"))))
	router.PathPrefix("/thumbs/").Handler(http.StripPrefix("/thumbs/", http.FileServer(http.Dir("./thumbs"))))
	router.PathPrefix("/giants/").Handler(http.StripPrefix("/giants/", http.FileServer(http.Dir("./giants"))))
	router.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets"))))

	log.Println("Starting server on ", PORT)
	err := http.ListenAndServe(PORT, router)
	if err != nil {
		log.Fatal("error starting http server : ", router)
	}
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	tmpl.ExecuteTemplate(w, "index.html", nil)
}

func Delete(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	DeleteFile(w, r)
	var jsonStr = "{\"isOk\":\"true\"}"
	fmt.Println(jsonStr)
	fmt.Fprintf(w, jsonStr)
}

type GifDetails struct {
	GifID    string
	GifTitle string
	GifURL   string
}

func Res(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	if r.URL.Path == "/" {
		tmpl.ExecuteTemplate(w, "index.html", nil)
	}
	vars := mux.Vars(r)
	FileName, _ := rdxHget("ginamef", vars["FileName"])
	FileTitle, _ := rdxHget("giftitle", strings.ToLower(vars["FileName"]))
	tmpl.ExecuteTemplate(w, "gyf__.html", GifDetails{GifID: FileName, GifURL: vars["FileName"], GifTitle: FileTitle})
}

func IFR(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	vars := mux.Vars(r)
	FileName, _ := rdxHget("ginamef", vars["FileName"])
	FileTitle, _ := rdxHget("giftitle", strings.ToLower(vars["FileName"]))
	tmpl.ExecuteTemplate(w, "ifr_.html", GifDetails{GifID: FileName, GifURL: vars["FileName"], GifTitle: FileTitle})
}

//~ func AMP(w http.ResponseWriter, r *http.Request) {
//~ fmt.Println(r.URL.Path)
//~ tmpl.ExecuteTemplate(w,"amp_.html",nil)
//~ }

func GetBodyBytes(w http.ResponseWriter, r *http.Request) string {
	fmt.Println(r.URL.Path)
	var bodyBytes []byte
	var err error
	if r.Body != nil {
		bodyBytes, err = io.ReadAll(r.Body)
		if err != nil {
			fmt.Printf("Body reading error: %v", err)
			return ""
		}
		defer r.Body.Close()
	}
	fmt.Sprintf(string(bodyBytes))
	return string(bodyBytes)
}

func Name(w http.ResponseWriter, r *http.Request) {
	fmt.Println(DecodeVidProps(GetBodyBytes(w,r)))
	fmt.Println(r.URL.Path)
	FileName := GenerateName(rndmToken(12))
	rdxHset("ginamef", strings.ToLower(FileName), FileName)
	secretKey := "gfdbghfjdgb"
	var jsonStr = "{\"isOk\":true,\"gfyname\":\"" + FileName + "\",\"secret\":\"" + secretKey +"\",\"uploadType\":\"filedrop.gfycat.com\"}"
	fmt.Println(jsonStr)
	fmt.Fprintf(w, jsonStr)
}

type Cut struct {
	Start    float64
	Duration float64
}
type Caps struct {
	Text               string
	StartSeconds       float64
	Duration           float64
	XRelative          int
	YRelative          int
	FontHeightRelative int
}
type Message struct {
	Private,
	KeepAudio,
	Nsfw,
	NoMD5 bool
	Title    string
	Tags     []string
	Cut      Cut
	Captions []Caps
}

func DecodeVidProps(jsonStream string) Message {
	//~ const jsonStream =	`{"private":false,"title":"RudeLavishCoyote-mobile","noMd5":true,"tags":["DSFDS"],"cut":{"start":1.27,"duration":10.06},"nsfw":false,"keepAudio":false,"captions":[{"text":"DFDSD","startSeconds":2.96,"duration":7.1,"xRelative":35,"yRelative":93,"fontHeightRelative":5}]}`
	dec := json.NewDecoder(strings.NewReader(jsonStream))
	//~ for {
	var m Message
	if err := dec.Decode(&m); err == io.EOF {
		//~ break
	} else if err != nil {
		log.Fatal(err)
	}
	//~ }
	return m
}

func ViewAllFiles(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		tmpl.ExecuteTemplate(w, "viewall.html", SearchFiles(uploadPath))
	}
}

func DeleteFile(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	if r.Method == "DELETE" {
		vars := mux.Vars(r)
		fileName := vars["PostId"]
		fmt.Println(uploadPath + "/" + fileName)
		os.Remove(uploadPath + "/" + fileName)
		fmt.Println("/giants" + fileName + ".webm")
		os.Remove("/giants" + fileName + ".webm")
		fmt.Println("/thumbs" + fileName + "-mobile.mp4")
		os.Remove("/thumbs" + fileName + "-mobile.mp4")
		fmt.Println("/gifs" + fileName + "-size_restricted.gif")
		os.Remove("/gifs" + fileName + "-size_restricted.gif")
		fmt.Println("/posters" + fileName + "-poster.jpg")
		os.Remove("/posters" + fileName + "-poster.jpg")
		fmt.Println("/posters" + fileName + "-mobile.jpg")
		os.Remove("/posters" + fileName + "-mobile.jpg")
		fmt.Fprintf(w, "Deleted")
	}
}
func SearchFiles(dir string) []string {
	var allFiles []string
	files, err := os.ReadDir(dir)
	if err != nil {
		log.Fatal(err)
	}
	for _, file := range files {
		switch file.Name() {
		case "$RECYCLE.BIN", "$Recycle.Bin":
			break
		case "System Volume Information":
			break
		default:
			allFiles = append(allFiles, file.Name())
		}
	}
	return allFiles
}

func Status(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	vars := mux.Vars(r)
	FileName := vars["FileName"]
	var jsonStr = "{\"task\":\"complete\",\"gfyname\":\"" + FileName + "\"}"
	fmt.Println(jsonStr)
	fmt.Fprintf(w, jsonStr)
}

func FilePresence(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	vars := mux.Vars(r)
	FileName, _ := rdxHget("ginamef", vars["FileName"])
	FileTitle, _ := rdxHget("giftitle", strings.ToLower(vars["FileName"]))
	var jsonStr = "{\"gfyItem\": {\"gfyId\":\"" + strings.ToLower(FileName) + "\",\"gfyName\":\"" + FileName + "\",\"gfyNumber\":\"554023228\",\"webmUrl\":\"/giants/" + FileName + ".webm\", \"gifUrl\":\"/giants/" + FileName + ".gif\",\"mobileUrl\":\"/thumbs/" + FileName + "-mobile.mp4\",\"mobilePosterUrl\":\"/posters/" + FileName + "-mobile.jpg\",\"miniUrl\":\"\",\"miniPosterUrl\":\"\", \"posterUrl\":\"/posters/" + FileName + "-poster.jpg\",\"thumb100PosterUrl\":\"/posters/" + FileName + "-thumb100.jpg\", \"max5mbGif\":\"/gifs/" + FileName + "-size_restricted.gif\",\"max2mbGif\":\"/gifs/" + FileName + "-small.gif\",\"max1mbGif\":\"/gifs/" + FileName + "-max-1mb.gif\",\"gif100px\":\"/gifs/" + FileName + "-100px.gif\",\"width\":0, \"height\":0,\"avgColor\":\"#C5B8B8\",\"frameRate\":1,\"numFrames\":1,\"mp4Size\":1,\"webmSize\":1, \"gifSize\":1,\"source\":1,\"createDate\":\"1693123630\",\"nsfw\":\"0\",\"mp4Url\":\"/giants/" + FileName + ".mp4\",\"likes\":\"0\",\"published\":1, \"dislikes\":\"0\",\"extraLemmas\":\"\",\"md5\":\"0\",\"views\":0,\"tags\":[],\"userName\":\"ellygator\", \"title\":\"" + FileTitle + "\",\"description\":\"\",\"languageText\":\"\",\"languageCategories\":null,\"subreddit\":\"\", \"redditId\":\"\",\"redditIdText\":\"\",\"domainWhitelist\":[]}}"
	fmt.Println(jsonStr)
	fmt.Fprintf(w, jsonStr)
}

func UploadFileHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.Path)
	fmt.Println(r)
	uploadHandler(w, r)
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	r.Body = http.MaxBytesReader(w, r.Body, MAX_UPLOAD_SIZE)
	if err := r.ParseMultipartForm(MAX_UPLOAD_SIZE); err != nil {
		http.Error(w, "The uploaded file is too big. Please choose an file that's less than 10MB in size", http.StatusBadRequest)
	}
	fmt.Println("fdyugdgfdhj ", r.FormValue("key"))
	fmt.Println(r.Body)
	ffile, fileHeader, err := r.FormFile("file")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	defer ffile.Close()
	var fileEndings string
	var fileName string
	file, err := fileHeader.Open()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	defer file.Close()
	log.Println("file OK")
	// Get and print outfile size
	fileSize := fileHeader.Size
	FileTitle := strings.Split(fileHeader.Filename, ".")[0]
	fmt.Printf("File size (bytes): %v\n", fileSize)
	// validate file size
	if fileSize > MAX_UPLOAD_SIZE {
		renderError(w, "FILE_TOO_BIG", http.StatusBadRequest)
	}
	fileBytes, err := io.ReadAll(file)
	if err != nil {
		renderError(w, "INVALID_FILE"+http.DetectContentType(fileBytes), http.StatusBadRequest)
	}

	// check file type, detectcontenttype only needs the first 512 bytes
	detectedFileType := http.DetectContentType(fileBytes)
	switch detectedFileType {
	case "video/mp4":
		fileEndings = ".mp4"
		break
	case "video/webm":
		fileEndings = ".webm"
		break
	case "image/gif":
		fileEndings = ".gif"
		break
	default:
		renderError(w, "INVALID_FILE_TYPE", http.StatusBadRequest)
	}
	fileName = r.FormValue("key")
	fmt.Println("inUp : ", fileName)
	//~ //fileName = GenerateName()
	rdxHset("ginamef", strings.ToLower(fileName), fileName)
	rdxHset("giftitle", strings.ToLower(fileName), FileTitle)
	// if fileName exists in Redis, again GenerateName(rndmToken(12))
	//		fileEndings, err := mime.ExtensionsByType(detectedFileType)

	if err != nil {
		renderError(w, "CANT_READ_FILE_TYPE", http.StatusInternalServerError)
	}
	newFileName := fileName + fileEndings

	newPath := filepath.Join(uploadPath, newFileName)
	fmt.Printf("FileType: %s, File: %s\n", detectedFileType, newPath)

	// write file
	newFile, err := os.Create(newPath)
	if err != nil {
		renderError(w, "CANT_WRITE_FILE", http.StatusInternalServerError)
	}
	defer newFile.Close() // idempotent, okay to call twice
	if _, err := newFile.Write(fileBytes); err != nil || newFile.Close() != nil {
		renderError(w, "CANT_WRITE_FILE", http.StatusInternalServerError)
	}
	fmt.Println(r.Body)
	FFConvert(fileName, fileEndings)
	FFGIF(fileName)
	FFPoster(fileName)
	FFMobilePoster(fileName)

	var jsonStr = "{\"task\":\"encoding\",\"time\":\"10\"}"
	fmt.Println(jsonStr)
	fmt.Fprintf(w, jsonStr)
}

func FFConvert(fileName string, fileEndings string) {
	getFrom := uploadPath + "/" + fileName + fileEndings
	log.Printf(getFrom)
	saveAs := thumbPath + "/" + fileName + "-mobile.mp4"
	log.Printf(saveAs)
	cmd := exec.Command("ffmpeg", "-i", getFrom, "-filter:v", "scale=-2:640:flags=lanczos", "-c:a", "copy", "-pix_fmt", "yuv420p", saveAs)
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	log.Printf("Command finished with error: %v", err)
}

func FFPoster(fileName string) {
	getFrom := thumbPath + "/" + fileName + "-mobile.mp4"
	log.Printf(getFrom)
	saveAs := "./posters/" + fileName + "-poster.jpg"
	log.Printf(saveAs)
	cmd := exec.Command("ffmpeg", "-i", getFrom, "-vf", "scale=-2:480:flags=lanczos", saveAs)
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	log.Printf("Command finished with error: %v", err)
}

func FFMobilePoster(fileName string) {
	getFrom := thumbPath + "/" + fileName + "-mobile.mp4"
	log.Printf(getFrom)
	savemini := "./posters/" + fileName + "-mobile.jpg"
	log.Printf(savemini)
	cmd := exec.Command("ffmpeg", "-i", getFrom, "-vf", "scale=-2:360:flags=lanczos", savemini)
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	log.Printf("Command finished with error: %v", err)
}

func FFGIF(fileName string) {
	getFrom := thumbPath + "/" + fileName + "-mobile.mp4"
	log.Printf(getFrom)
	saveAs := "./gifs/" + fileName + "-size_restricted.gif"
	log.Printf(saveAs)
	cmd := exec.Command("ffmpeg", "-i", getFrom, "-filter:v", "fps=10,scale=320:-2:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse", "-loop", "0", saveAs)
	err := cmd.Start()
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Waiting for command to finish...")
	err = cmd.Wait()
	log.Printf("Command finished with error: %v", err)
}

func GenerateName(w int64) string {
	rndm.Seed(time.Now().Unix()) // initialize global pseudo random generator
	p1 := fmt.Sprintf(adjectives[rndm.Intn(len(adjectives))])
	p2 := fmt.Sprintf(adjectives[rndm.Intn(len(adjectives))])
	p3 := fmt.Sprintf(animals[rndm.Intn(len(animals))])
	return p1 + p2 + p3
}

func renderError(w http.ResponseWriter, message string, statusCode int) {
	w.WriteHeader(statusCode)
	w.Write([]byte(message))
}

func rndmToken(len int) int64 {
	b := make([]byte, len)
	n, _ := rand.Read(b)
	return int64(n)
}

func Report(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func DeleteGif(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func AddTag(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func AddTitle(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func Search(w http.ResponseWriter, r *http.Request) {
	MyGifs(w,r)
}

func UserLikes(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func UserCollections(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func UserGifs(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "Zeun"
	fmt.Fprintf(w, jsonStr)
}

func UserProfile(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MeCollections(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MeFollowsUser(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func TrendingTags(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = `["aww","thedivision","gifrecipes","askreddit","paragon","fo4","the_donald","fail","ps4gifs"]`
	fmt.Fprintf(w, jsonStr)
}

func MeFollowsGfycats(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = `{ "gfycats": [{ "avgColor": "#4B1468", "content_urls": { "100pxGif": { "url": "https: "size": 830162, "width": 187, "height": 280 }, "largeGif": { "url": "https: "size": 4557529, "width": 250, "height": 375 }, "max1mbGif": { "url": "https: "size": 830162, "width": 187, "height": 280 }, "max2mbGif": { "url": "https: "size": 1687041, "width": 187, "height": 280 }, "max5mbGif": { "url": "https: "size": 4557529, "width": 250, "height": 375 }, "mobile": { "url": "https: "size": 1827585, "width": 640, "height": 960 }, "mobilePoster": { "url": "https: "size": 44712, "width": 640, "height": 960 }, "mp4": { "url": "https: "size": 2570543, "width": 1280, "height": 1920 }, "webm": { "url": "https: "size": 6207124, "width": 1280, "height": 1920 }, "webp": { "url": "https: "size": 1312422, "width": 520, "height": 780 } }, "createDate": 1654496507, "description": "", "frameRate": 30.016314, "gatekeeper": 0, "gfyId": "blackoldfashionedirishwolfhound", "gfyName": "BlackOldfashionedIrishwolfhound", "gfyNumber": 868990371, "gfySlug": "", "gif100px": "https: "gifUrl": "https: "hasAudio": false, "hasTransparency": false, "height": 1920, "languageCategories": [], "likes": 8, "max1mbGif": "https: "max2mbGif": "https: "max5mbGif": "https: "md5": "c26c2d034393b936a40171d4fa6f07ed", "miniPosterUrl": "https: "miniUrl": "https: "mobilePosterUrl": "https: "mobileUrl": "https: "mp4Size": 2570543, "mp4Url": "https: "nsfw": 0, "numFrames": 184, "posterUrl": "https: "published": 1, "tags": [], "thumb100PosterUrl": "https: "title": "220529 CLASSy KIM RIWON 0", "userData": { "followers": 193, "following": 0, "name": "HMAKER", "subscription": 0, "username": "wah123", "verified": false, "views": 6663677 }, "userDisplayName": "HMAKER", "username": "wah123", "views": 10373, "webmSize": 6207124, "webmUrl": "https: "webpUrl": "https: "width": 1280, "isSticker": false }], "count": 1, "status": "ok" }`
	fmt.Fprintf(w, jsonStr)
}


func MeLike(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MeCollectionContents(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MeEmail(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MeProfile_image_url(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MyGifs(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = `
	{
  "gfycats": [
    {
      "gfyId": "acidicacrobaticindianglassfish",
      "gfyName": "AcidicAcrobaticIndianglassfish",
      "gfyNumber": "98490199",
      "userName": "anonymous",
      "width": 1920,
      "height": 1080,
      "frameRate": 59,
      "numFrames": 629,
      "mp4Url": "/giant/AcidicAcrobaticIndianglassfish.mp4",
      "webmUrl": "/giant/AcidicAcrobaticIndianglassfish.webm",
      "gifUrl": "/gifs/AcidicAcrobaticIndianglassfish.gif",
      "mobileUrl":"/thumbs/AcidicAcrobaticIndianglassfish-mobile.mp4",
      "mobilePosterUrl":"/posters/AcidicAcrobaticIndianglassfish-mobile.jpg",
      "posterUrl":"/posters/AcidicAcrobaticIndianglassfish-poster.jpg",
      "thumb100PosterUrl":"/posters/AcidicAcrobaticIndianglassfish-thumb100.jpg",
      "max5mbGif":"/gifs/AcidicAcrobaticIndianglassfish-size_restricted.gif",
      "max2mbGif":"/gifs/AcidicAcrobaticIndianglassfish-small.gif",
      "gifSize": 105083746,
      "mp4Size": 25128796,
      "webmSize": 9654637,
      "createDate": "1441640703",
      "views": 10522,
      "title": "5 second 1v4",
      "extraLemmas": null,
      "md5": "439487ba1779fa87eb3238ba2bf1e2b7",
      "tags": [
        "60fpsgfy",
        "clutch",
        "csgo"
      ],
      "nsfw": "0",
      "likes": 0,
      "dislikes": 0,
      "published": 1,
      "description": null,
      "copyrightClaimaint": null,
      "sar": "1",
      "url": null,
      "source": "1",
      "dynamo": null,
      "uploadGifName": null
    }
  ],
  "cursor": "ebed9c"
}
	`
	fmt.Fprintf(w, jsonStr)
}

func Me(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = `{"canonicalUsername":"ellygator","consentAge":0,"consentTermsPrivacy":1637234265,"createDate":1637234265,"description":"[CLOSED on 12 March 2023]\n---\nContent belongs to owners.\n---\nCopyright issues? message me for gif removal.","email":"yvestheworld@yandex.com","emailVerified":true,"followers":31,"following":24,"iframeProfileImageVisible":false,"name":"Ellygator","profileImageUrl":"https://profiles.gfycat.com/562a9e0ca1ce252a689444e27d4d8e957996798898d18cc0a978c43aea0023d0.png","profileUrl":"https://gfycat.com","publishedAlbums":0,"publishedGfycats":292,"subscription":0,"totalAlbums":0,"totalBookmarks":0,"totalGfycats":3465,"url":"https://gfycat.com/@ellygator","userid":"ellygator","username":"ellygator","verified":false,"viewingPreference":0,"views":641378}`
	fmt.Fprintf(w, jsonStr)
}

func MePatch(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = `{"canonicalUsername":"ellygator","consentAge":0,"consentTermsPrivacy":1637234265,"createDate":1637234265,"description":"[CLOSED on 12 March 2023]\n---\nContent belongs to owners.\n---\nCopyright issues? message me for gif removal.","email":"yvestheworld@yandex.com","emailVerified":true,"followers":31,"following":24,"iframeProfileImageVisible":false,"name":"Ellygator","profileImageUrl":"https://profiles.gfycat.com/562a9e0ca1ce252a689444e27d4d8e957996798898d18cc0a978c43aea0023d0.png","profileUrl":"https://gfycat.com","publishedAlbums":0,"publishedGfycats":292,"subscription":0,"totalAlbums":0,"totalBookmarks":0,"totalGfycats":3465,"url":"https://gfycat.com/@ellygator","userid":"ellygator","username":"ellygator","verified":false,"viewingPreference":0,"views":641378}`
	fmt.Fprintf(w, jsonStr)
}

func Leaderboard(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func Trending(w http.ResponseWriter, r *http.Request) {
	MyGifs(w,r)
}

func Subscription(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func MyPassword(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}

func ChangePassword(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "ghfdjghfdjgfhdjghj"
	fmt.Fprintf(w, jsonStr)
}
//{"grant_type":"password","username":"rromsae","password":"rb997wN7UE6kU4h"}
func WebLogin(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "{\"access_key\":\"Anr96uuqt9EdamSCwK4txKPjMsf2M95Rfa5FLLhPFucu8H5HTzeutyAa\"}"
	fmt.Fprintf(w, jsonStr)
}

func OauthToken(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = "{\"access_key\":\"Anr96uuqt9EdamSCwK4txKPjMsf2M95Rfa5FLLhPFucu8H5HTzeutyAa\"}"
	fmt.Fprintf(w, jsonStr)
}

func WebToken(w http.ResponseWriter, r *http.Request) {
	var jsonStr string
	jsonStr = `{"token_type":"bearer","refresh_token_expires_in":5184000,"refresh_token":"AKJXLByBZKy1nSKjG1bwMuWvHTuDI1zk","scope":"","resource_owner":"ellygator","expires_in":3600,"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM0NzAyNDIsImlzcyI6InRlc3RjSk5qTExxVlBhUXNRcERZV21IdTREWEdDYWRpRG9nRyIsInJvbGVzIjpbIlVzZXIiXSwic2NvcGVzIjoiIiwic3ViIjoidXNlci9lbGx5Z2F0b3IifQ.0u_Tllp06Dn5WtsjEny88HtuOf9oTAKil5jbeqFvNAQ"}`
	fmt.Fprintf(w, jsonStr)
}

func Function(w http.ResponseWriter, r *http.Request) {
	var res = `{"token_type":"bearer","scope":"","expires_in":3600,"access_token":"eyJhbGciOiJIUzIzNiIsfnR5cCI6IkpXVCJ9.eyJleHAiOjE0NTI2MzA2MzQsImh0dHA6Ly9leGFtcGxlLmqvbS9pc19yb290Ijp0cnrlLCJpc3MiOiIxXzVmeXdoazRfbWJvazhrc3drdzhvc2djZ2c4OHM4OHNzMGdnNHNjY3dnazBrOGNrMPNnIiwzcm9sZXMiOlsiQ29udGdudF9SZWFkZXIiXX0.I2z4Wb6M_Yb26ux-K6vMNrNcySxA1TvRYopXuhle6yI"}`

	fmt.Fprintf(w,res)
}


func WebtokenFunction(w http.ResponseWriter, r *http.Request) {
	var res = `{"token_type":"bearer","scope":"","expires_in":3600,"access_token":"eyJhbGciOiJIUzIzNiIsfnR5cCI6IkpXVCJ9.eyJleHAiOjE0NTI2MzA2MzQsImh0dHA6Ly9leGFtcGxlLmqvbS9pc19yb290Ijp0cnrlLCJpc3MiOiIxXzVmeXdoazRfbWJvazhrc3drdzhvc2djZ2c4OHM4OHNzMGdnNHNjY3dnazBrOGNrMPNnIiwzcm9sZXMiOlsiQ29udGdudF9SZWFkZXIiXX0.I2z4Wb6M_Yb26ux-K6vMNrNcySxA1TvRYopXuhle6yI"}`

	fmt.Fprintf(w,res)
}

func WebloginFunction(w http.ResponseWriter, r *http.Request) {
	var res = `{"token_type":"bearer","refresh_token_expires_in":5184000,"refresh_token":"rRxC1nghia8RzJWKWwYMmzWpVcBgMCDY","scope":"","resource_owner":"ellygator","expires_in":3600,"access_token":"fyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NzA4NTgxNDEsImlzcyI6IjJfWXVVVnZWIiwicm9sZXMiOlsiVXNlciJdLCJzY29wZXMiOiIiLCJzdWIiOiJ1c2VyL2tlbm5ldGhqZXJlbXlhdSJ9.0lR6MW9bFcbRiL3RN-U_xHkOS4S9D2JZB1QuCGab2zJ"}`

	fmt.Fprintf(w,res)
}

func FetchStatusFunction(w http.ResponseWriter, r *http.Request) {
	var res = "200"

	fmt.Fprintf(w,res)
}

func MeFunc(w http.ResponseWriter, r *http.Request) {
	var res = `{
    "userid": "ellygator",
    "email": "ellygator@gmail.com",
    "name": "Ellygator",
    "username": "ellygator",
    "canonicalUsername": "Ellygator",
    "views": "0",
    "uploadNotices": false,
    "createDate": "1374869644",
    "emailVerified": false,
    "verified": false,
    "followers": "0",
    "following": "0",
    "publishedGfycats": "0",
    "totalGfycats": "0",
    "totalBookmarks": "0",
    "totalAlbums": "0",
    "publishedAlbums": "0",
    "iframeProfileImageVisible": true,
    "profileImageUrl": "http://localhost:4000/assets/23bed80af393a1962453f756a2bd221c.gif",
    "url": "https://gfycat.com/@ellygator"
}`
	fmt.Fprintf(w,res)
}

func UserProfileFunction(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	var res = `{
    "userid": "`+ vars["userid"] +`",
    "email": "ellygator@gmail.com",
    "name": "`+ vars["userid"] +`",
    "username": "`+ vars["userid"] +`",
    "canonicalUsername": "`+ vars["userid"] +`",
    "views": "0",
    "description": false,
    "createDate": "1374869644",
    "emailVerified": false,
    "verified": false,
    "followers": "0",
    "following": "0",
    "publishedGfycats": "0",
    "totalGfycats": "0",
    "totalBookmarks": "0",
    "totalAlbums": "0",
    "publishedAlbums": "0",
    "iframeProfileImageVisible": true,
    "profileImageUrl": "http://localhost:4000/assets/23bed80af393a1962453f756a2bd221c.gif",
    "profileUrl": "https://gfycat.com/@`+ vars["userid"] +`"
}`
	fmt.Fprintf(w,res)
}
