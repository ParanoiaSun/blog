- [博文](#博文)
- [相册](#相册)
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
        "file_path": "public/blogs/1234.md",
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

| 参数名称   | 参数类型 | 是否必传 | 描述     |
| ---------- | -------- | -------- | -------- |
| message_id | String   | Y        | 父留言ID |

###### 请求体参数

| 参数名称 | 参数类型 | 是否必传 | 描述       |
| -------- | -------- | -------- | ---------- |
| name     | String   | Y        | 留言人昵称 |
| content  | String   | Y        | 留言内容   |

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
            "file_path": "public/blogs/5da16bbc9be9ef3c8ba60025.md",
            "tag": [],
            "category": "",
            "_id": "1234",
            "title": "我的第二篇博文",
            "summary": "那真的相当精彩"
        },
        {
            "create_time": "2019-10-12T13:44:46.171Z",
            "file_path": "public/blogs/5da1684e45db2333ba3c7175.md",
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

### 

# 相册

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