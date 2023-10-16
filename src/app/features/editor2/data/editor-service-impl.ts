import {EditorService} from "../domain/editor-service";
import {LongreadDocument} from "../domain/models/models";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EditorServiceImpl extends EditorService {
  getDocumentBy(uid: string): LongreadDocument {
    return {
      title: "Docker",
      paragraphs: [
        {
          type: "text",
          spans: [
            {
              text: "Сборка и запуск Angular приложения в Docker контейнере",
              style: {
                bold: true,
                size: 24,
              }
            }
          ]
        },
        {
          type: "text",
          spans:
            [
              {
                text: "В этой статье мы рассмотрим как собирать и запускать Angular приложение в Docker контейнере. Для этого будем использовать файл Dockerfile, где будут содержаться все необходимые инструкции. Наше приложение будет билдится и хостить свой production-ready код,",
              },
              {
                text: " в контейнере",
                style: {
                  bold: true,
                  cursive: true,
                }
              },
              {
                text: " с веб сервером NGINX.",
              }
            ]
        }
        ,
        {
          type: "text",
          spans:
            [
              {
                text: "Условимся что у нас уже существует некое приложение sample-app, поэтому шаг с созданием приложения опустим.",
              }
            ]
        }
        ,
        {
          type: "image",
          url:
            "https://habrastorage.org/getpro/habr/upload_files/9f7/867/465/9f786746560ec91b5c7454503061a339.png",
          description:
            ""
        }
        ,
        {
          type: "text",
          spans:
            [
              {
                text: "Создание Dockerfile и nginx.conf",
                style: {
                  bold: true,
                  size: 32,
                }
              }
            ]
        }
        ,
        {
          type: "text",
          spans:
            [
              {
                text: "Начинаем с того что создаем в корне нашего Angular приложения, файлы с именем Dockerfile и nginx.conf",
              }
            ]
        }
      ]

    }
  }

}
