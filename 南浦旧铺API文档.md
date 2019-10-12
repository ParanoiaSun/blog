- [博文](#博文)
  - [发布博文](#发布博文)
  - [发布博文回复](#发布博文回复)
  - [前端查询博文展示列表](#前端查询博文展示列表)
  - [前端使用ID查询博文](#前端使用ID查询博文)
- [相册](#相册)
  - [创建相册](#创建相册)
  - [上传照片](#上传照片)
  - [前端查询相册展示列表](#前端查询相册展示列表)
  - [前端使用ID查询相册](#前端使用ID查询相册)
  - [前端使用ID查询照片](#前端使用ID查询照片)
- [留言板](#留言板)
  - [添加留言](#添加留言)
  - [添加子留言](#添加子留言)
  - [前端查询留言展示列表](#前端查询留言展示列表)
  - [前端使用ID查询留言](#前端使用ID查询留言)
  - [前端使用ID查询子留言](#前端使用ID查询子留言)
  - [后台根据留言ID删除留言](#后台根据留言ID删除留言)
  - [后台根据留言ID恢复留言](#后台根据留言ID恢复留言)
  - [后台根据子留言ID删除子留言](#后台根据子留言ID删除子留言)
  - [后台根据子留言ID恢复子留言](#后台根据子留言ID恢复子留言)


# 博文

### 发布博文

`/blog/uploadBlog`

请求方法：POST 

请求类型：application/x-www-form-urlencoded

响应内容：JSON

##### 请求参数

###### 请求体参数

| 参数名称 | 参数类型      | 是否必传 | 描述             |
| -------- | ------------- | -------- | ---------------- |
| title    | String        | Y        | 留言人昵称       |
| summary  | String        | Y        | 文章简介         |
| file     | MultipartFile | Y        | 文章markdown文件 |

##### 请求示例

`http://{ip:port}/api/blog/uploadBlog`

##### 响应示例

```json
{
    "code": 1,
    "message": "博文发布成功",
    "data": {
        "create_time": "2019-10-12T13:59:24.280Z",
        "file_path": "1234.md",
        "is_deleted": 0,
        "tag": [],
        "category": "",
        "_id": "1234",
        "comments": [],
        "title": "我的第二篇博文",
        "summary": "那真的相当精彩",
        "__v": 0
    }
}
```

### 发布博文回复

`/blog/sendBlogComment`

请求方法：POST 

请求类型：application/x-www-form-urlencoded

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称 | 参数类型 | 是否必传 | 描述   |
| -------- | -------- | -------- | ------ |
| blog_id  | String   | Y        | 博文ID |

###### 请求体参数

| 参数名称 | 参数类型 | 是否必传 | 描述       |
| -------- | -------- | -------- | ---------- |
| name     | String   | Y        | 评论者昵称 |
| content  | String   | Y        | 评论内容   |

##### 请求示例

`http://{ip:port}/api/blog/sendBlogComment?blog_id=1234`

##### 响应示例

```json
{
    "code": 1,
    "message": "博文回复发布成功",
    "data": {}
}
```

### 前端查询博文展示列表

`/blog/getByPage`

请求方法：GET

响应内容：JSON

##### 请求示例

`http://{ip:port}/api/blog/getByPage`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取博文列表成功",
    "data": [
        {
            "create_time": "2019-10-12T13:59:24.280Z",
            "file_path": "1234.md",
            "tag": [],
            "category": "",
            "_id": "1234",
            "title": "我的第二篇博文",
            "summary": "那真的相当精彩"
        },
        {
            "create_time": "2019-10-12T13:44:46.171Z",
            "file_path": "1233.md",
            "tag": [],
            "category": "",
            "_id": "1233",
            "title": "1234",
            "summary": "1111",
            "comments": [
                {
                    "send_time": "2019-10-12T13:54:29.776Z",
                    "is_deleted": 0,
                    "reply": "",
                    "_id": "10",
                    "name": "sonia",
                    "content": "不错。"
                }
            ]
        }
    ]
}
```

### 前端使用ID查询博文

`/blog/getById`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称 | 参数类型 | 是否必传 | 描述   |
| -------- | -------- | -------- | ------ |
| blog_id  | String   | Y        | 博文ID |

##### 请求示例

`http://{ip:port}/api/blog/getById?message_id=1234`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取博文成功",
    "data": {
        "create_time": "2019-10-12T13:44:46.171Z",
        "file_path": "1234.md",
        "tag": [],
        "category": "",
        "_id": "1234",
        "title": "1234",
        "summary": "1111",
        "comments": [
            {
                "send_time": "2019-10-12T13:54:29.776Z",
                "is_deleted": 0,
                "reply": "",
                "_id": "10",
                "name": "sonia",
                "content": "不错。"
            }
        ]
    }
}
```

### 

# 相册

### 创建相册

`/photo/createAlbum`

请求方法：POST 

请求类型：application/x-www-form-urlencoded

响应内容：JSON

##### 请求参数

###### 请求体参数

| 参数名称 | 参数类型      | 是否必传 | 描述     |
| -------- | ------------- | -------- | -------- |
| name     | String        | Y        | 相册名称 |
| cover    | MultipartFile | Y        | 相册封面 |

##### 请求示例

`http://localhost:8000/api/photo/createAlbum`

##### 响应示例

```json
{
    "code": 1,
    "message": "创建相册成功",
    "data": {
        "cover": "123.png",
        "create_time": "2019-10-12T15:21:31.275Z",
        "is_deleted": 0,
        "_id": "123",
        "photos": [],
        "name": "我的第一个相册",
        "__v": 0
    }
}
```

### 上传照片

`/photo/uploadPhoto`

请求方法：POST 

请求类型：application/x-www-form-urlencoded

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称 | 参数类型 | 是否必传 | 描述   |
| -------- | -------- | -------- | ------ |
| album_id | String   | Y        | 相册ID |

###### 请求体参数

| 参数名称    | 参数类型      | 是否必传 | 描述     |
| ----------- | ------------- | -------- | -------- |
| description | String        | Y        | 照片描述 |
| photo       | MultipartFile | Y        | 照片文件 |

##### 请求示例

`http://{ip:port}/api/photo/uploadPhoto?album_id=123`

##### 响应示例

```json
{
    "code": 1,
    "message": "照片上传成功",
    "data": {}
}
```

### 前端查询相册展示列表

`/photo/getAlbumList`

请求方法：GET

响应内容：JSON

##### 请求示例

`http://{ip:port}/api/photo/getAlbumList`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取相册列表成功",
    "data": [
        {
            "cover": "2.png",
            "create_time": "2019-10-12T15:38:51.736Z",
            "_id": "2",
            "photos": [],
            "name": "我的第二个相册"
        },
        {
            "cover": "2.png",
            "create_time": "2019-10-12T15:21:31.275Z",
            "_id": "2",
            "photos": [
                {
                    "img": "100.png",
                    "description": "我的第一张照片",
                    "create_time": "2019-10-12T15:47:26.569Z",
                    "is_deleted": 0,
                    "_id": "100"
                }
            ],
            "name": "我的第一个相册"
        }
    ]
}
```

### 前端使用ID查询相册

`/photo/getAlbumById`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称 | 参数类型 | 是否必传 | 描述   |
| -------- | -------- | -------- | ------ |
| album_id | String   | Y        | 相册ID |

##### 请求示例

`http://{ip:port}/api/photo/getAlbumById?album_id=123`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取相册成功",
    "data": {
        "cover": "123.png",
        "create_time": "2019-10-12T15:21:31.275Z",
        "_id": "123",
        "photos": [
            {
                "img": "1.png",
                "description": "我的第一张照片",
                "create_time": "2019-10-12T15:47:26.569Z",
                "is_deleted": 0,
                "_id": "1"
            }
        ],
        "name": "我的第一个相册"
    }
}
```

### 前端使用ID查询照片

`/photo/getByPhotoId`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称 | 参数类型 | 是否必传 | 描述   |
| -------- | -------- | -------- | ------ |
| album_id | String   | Y        | 相册ID |
| photo_id | String   | Y        | 照片ID |

##### 请求示例

`http://{ip:port}/api/photo/getByPhotoId?album_id=123&photo_id=1`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取照片成功",
    "data": {
        "img": "1.png",
        "description": "我的第一张照片",
        "create_time": "2019-10-12T15:47:26.569Z",
        "is_deleted": 0,
        "_id": "1"
    }
}
```

### 

# 留言板

### 添加留言

`/message/addMessage`

请求方法：POST 

请求类型：application/x-www-form-urlencoded

响应内容：JSON

##### 请求参数

###### 请求体参数

| 参数名称 | 参数类型 | 是否必传 | 描述       |
| -------- | -------- | -------- | ---------- |
| name     | String   | Y        | 留言人昵称 |
| content  | String   | Y        | 留言内容   |

##### 请求示例

`http://{ip:port}/api/message/addMessage`

##### 响应示例

```json
{
    "code": 1,
    "message": "留言发布成功",
    "data": {}
}
```

### 添加子留言

`/message/addSubMessage`

请求方法：POST 

请求类型：application/x-www-form-urlencoded

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称   | 参数类型 | 是否必传 | 描述     |
| ---------- | -------- | -------- | -------- |
| message_id | String   | Y        | 父留言ID |

###### 请求体参数

| 参数名称 | 参数类型 | 是否必传 | 描述       |
| -------- | -------- | -------- | ---------- |
| name     | String   | Y        | 留言人昵称 |
| content  | String   | Y        | 留言内容   |

##### 请求示例

`http://{ip:port}/api/message/addSubMessage?message_id=123`

##### 响应示例

```json
{
    "code": 1,
    "message": "留言回复发布成功",
    "data": {}
}
```

### 前端查询留言展示列表

`/message/getByPage`

请求方法：GET

响应内容：JSON

##### 请求示例

`http://{ip:port}/api/message/getByPage`

##### 响应示例
```json
{
    "code": 1,
    "message": "获取留言列表成功",
    "data": [
        {
            "send_time": "2019-10-11T13:50:42.760Z",
            "_id": "123",
            "name": "sonia",
            "content": "ohhhhhhhhh!!!!"
        },
        {
            "send_time": "2019-10-10T14:30:44.264Z",
            "_id": "124",
            "name": "sonia",
            "content": "hello~~~~~!!!!!!",
            "sub_message": [
                {
                    "send_time": "2019-10-10T16:37:28.899Z",
                    "is_deleted": 0,
                    "_id": "10",
                    "name": "paranoia",
                    "content": "sure！"
                }
            ]
        }
    ]
}
```

### 前端使用ID查询留言

`/message/getById`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称   | 参数类型 | 是否必传 | 描述   |
| ---------- | -------- | -------- | ------ |
| message_id | String   | Y        | 留言ID |

##### 请求示例

`http://{ip:port}/api/message/getById?message_id=123`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取留言表成功",
    "data": {
        "send_time": "2019-10-10T14:30:44.264Z",
        "_id": "123",
        "name": "sonia",
        "content": "hello~~~~~!!!!!!",
        "sub_message": [
            {
                "send_time": "2019-10-10T16:37:28.899Z",
                "is_deleted": 0,
                "_id": "11",
                "name": "paranoia",
                "content": "sure！"
            },
            {
                "send_time": "2019-10-10T16:57:28.899Z",
                "is_deleted": 0,
                "_id": "12",
                "name": "paranoia",
                "content": "sure yeah！"
            }
        ]
    }
}
```

### 前端使用ID查询子留言

`/message/getSubMessageById`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称   | 参数类型 | 是否必传 | 描述     |
| ---------- | -------- | -------- | -------- |
| message_id | String   | Y        | 父留言ID |

##### 请求示例

`http://{ip:port}/api/message/getSubMessageById?message_id=123`

##### 响应示例

```json
{
    "code": 1,
    "message": "获取子留言列表成功",
    "data": [
        {
            "send_time": "2019-10-10T16:37:28.899Z",
            "is_deleted": 0,
            "_id": "11",
            "name": "paranoia",
            "content": "sure！"
        },
        {
            "send_time": "2019-10-10T16:57:28.899Z",
            "is_deleted": 0,
            "_id": "12",
            "name": "paranoia",
            "content": "sure yeah！"
        }
    ]
}
```

### 后台根据留言ID删除留言

`/message/removeMessage`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称   | 参数类型 | 是否必传 | 描述   |
| ---------- | -------- | -------- | ------ |
| message_id | String   | Y        | 留言ID |

##### 请求示例

`http://{ip:port}/api/message/removeMessage?message_id=1234`

##### 响应示例

```json
{
    "code": 1,
    "message": "留言删除成功",
    "data": {
        "send_time": "2019-10-10T14:30:44.264Z",
        "is_deleted": 1,
        "_id": "1234",
        "name": "sonia",
        "content": "hello~~~~~!!!!!!",
        "__v": 0
    }
}
```

### 后台根据留言ID恢复留言

`/message/recoverMessage`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称   | 参数类型 | 是否必传 | 描述   |
| ---------- | -------- | -------- | ------ |
| message_id | String   | Y        | 留言ID |

##### 请求示例

`http://{ip:port}/api/message/recoverMessage?message_id=1234`

##### 响应示例

```json
{
    "code": 1,
    "message": "留言恢复成功",
    "data": {
        "send_time": "2019-10-10T14:30:44.264Z",
        "is_deleted": 0,
        "_id": "1234",
        "name": "sonia",
        "content": "hello~~~~~!!!!!!",
        "__v": 0
    }
}
```

### 后台根据子留言ID删除子留言

`/message/removeSubMessage`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称       | 参数类型 | 是否必传 | 描述     |
| -------------- | -------- | -------- | -------- |
| message_id     | String   | Y        | 留言ID   |
| sub_message_id | String   | Y        | 子留言ID |

##### 请求示例

`http://{ip:port}/api/message/removeSubMessage?message_id=1234&sub_message_id=11`

##### 响应示例

```json
{
    "code": 1,
    "message": "子留言删除成功",
    "data": {
        "send_time": "2019-10-10T14:30:44.264Z",
        "is_deleted": 0,
        "_id": "1234",
        "sub_message": [
            {
                "send_time": "2019-10-10T16:37:28.899Z",
                "is_deleted": 1,
                "_id": "11",
                "name": "paranoia",
                "content": "sure！"
            },
            {
                "send_time": "2019-10-10T16:37:28.899Z",
                "is_deleted": 0,
                "_id": "12",
                "name": "paranoia",
                "content": "sure yeah！"
            }
        ],
        "name": "sonia",
        "content": "hello~~~~~!!!!!!",
        "__v": 0
    }
}
```

### 后台根据子留言ID恢复子留言

`/message/recoverSubMessage`

请求方法：GET

响应内容：JSON

##### 请求参数

###### 查询参数

| 参数名称       | 参数类型 | 是否必传 | 描述     |
| -------------- | -------- | -------- | -------- |
| message_id     | String   | Y        | 留言ID   |
| sub_message_id | String   | Y        | 子留言ID |

##### 请求示例

`http://{ip:port}/api/message/recoverSubMessage?message_id=1234&sub_message_id=11`

##### 响应示例

```json
{
    "code": 1,
    "message": "子留言恢复成功",
    "data": {
        "send_time": "2019-10-10T14:30:44.264Z",
        "is_deleted": 0,
        "_id": "1234",
        "sub_message": [
            {
                "send_time": "2019-10-10T16:37:28.899Z",
                "is_deleted": 0,
                "_id": "11",
                "name": "paranoia",
                "content": "sure！"
            },
            {
                "send_time": "2019-10-10T16:37:28.899Z",
                "is_deleted": 0,
                "_id": "12",
                "name": "paranoia",
                "content": "sure yeah！"
            }
        ],
        "name": "sonia",
        "content": "hello~~~~~!!!!!!",
        "__v": 0
    }
}
```
#### 