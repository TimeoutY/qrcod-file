use actix_web::{ web, App, HttpServer, Responder, HttpResponse };
use actix_multipart::Multipart;
use futures::StreamExt;
use std::io::Write;
use std::fs::File;

async fn save_file(mut payload: Multipart) -> impl Responder {
    // 遍历 multipart 表单的每个部分
    while let Some(item) = payload.next().await {
        let mut field = item.unwrap();

        // 如果字段是文件类型
        if let Some(content_disposition) = field.content_disposition() {
            // 获取文件名
            let filename = content_disposition.get_filename().unwrap_or("default.txt");

            // 创建文件
            let filepath = format!("./uploads/{}", filename);
            let mut file = File::create(filepath).unwrap();

            // 将文件内容写入文件
            while let Some(chunk) = field.next().await {
                let data = chunk.unwrap();
                file.write_all(&data).unwrap();
            }
        }
    }

    HttpResponse::Ok().body("File uploaded successfully")
}

async fn index() -> impl Responder {
    HttpResponse::Ok().body("Welcome to the file upload server!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // 创建上传目录，如果不存在
    std::fs::create_dir_all("./uploads").unwrap();

    HttpServer::new(|| {
        App::new().route("/", web::get().to(index)).route("/upload", web::post().to(save_file))
    })
        .bind("127.0.0.1:8080")?
        .run().await
}
