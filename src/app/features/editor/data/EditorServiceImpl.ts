import {EditorService} from "../domain/EditorService";
import {LongreadDocument} from "../domain/models/models";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EditorServiceImpl extends EditorService {
  getDocumentBy(uid: string): LongreadDocument {
    return {
      title: "",
      paragraphs: [
        // {
        //   type: "text",
        //   spans: [
        //     {
        //       text: "<br>"
        //     }
        //   ]
        // },
        // {
        //   type: "text",
        //   spans: [
        //     {
        //       text: "Сборка и запуск Angular приложения в Docker контейнере",
        //       style: {
        //         bold: true,
        //         size: 24,
        //       }
        //     }
        //   ]
        // },
        // {
        //   type: "text",
        //   spans:
        //     [
        //       {
        //         text: "В этой статье мы рассмотрим как собирать и запускать Angular приложение в Docker контейнере. Для этого будем использовать файл Dockerfile, где будут содержаться все необходимые инструкции. Наше приложение будет билдится и хостить свой production-ready код,",
        //       },
        //       {
        //         text: " в контейнере",
        //         style: {
        //           bold: true,
        //           cursive: true,
        //         }
        //       },
        //       {
        //         text: " с веб сервером NGINX.",
        //       }
        //     ]
        // }
        // ,
        // {
        //   type: "text",
        //   id:
        //     "3",
        //   spans:
        //     [
        //       {
        //         id: "1",
        //         text: "Условимся что у нас уже существует некое приложение sample-app, поэтому шаг с созданием приложения опустим.",
        //       }
        //     ]
        // }
        // ,
        // {
        //   type: "image",
        //   id:
        //     "4",
        //   url:
        //     "https://habrastorage.org/getpro/habr/upload_files/9f7/867/465/9f786746560ec91b5c7454503061a339.png",
        //   description:
        //     "Описание под картинкой"
        // }
        // ,
        // {
        //   type: "text",
        //   id:
        //     "5",
        //   spans:
        //     [
        //       {
        //         id: "1",
        //         text: "Создание Dockerfile и nginx.conf",
        //         style: {
        //           bold: true,
        //           size: 32,
        //         }
        //       }
        //     ]
        // }
        // ,
        // {
        //   type: "text",
        //   id:
        //     "6",
        //   spans:
        //     [
        //       {
        //         id: "1",
        //         text: "Начинаем с того что создаем в корне нашего Angular приложения, файлы с именем Dockerfile и nginx.conf",
        //       }
        //     ]
        // }
      ]

    }
  }

}
