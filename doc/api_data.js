define({ "api": [
  {
    "type": "post",
    "url": "/banner/add",
    "title": "添加轮播图",
    "name": "add",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bannerRouter.js",
    "groupTitle": "banner"
  },
  {
    "type": "post",
    "url": "/banner/del",
    "title": "删除轮播图",
    "name": "del",
    "group": "banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>图片id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>图片路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bannerRouter.js",
    "groupTitle": "banner"
  },
  {
    "type": "post",
    "url": "/banner/get",
    "title": "查询轮播图",
    "name": "get",
    "group": "banner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bannerRouter.js",
    "groupTitle": "banner"
  },
  {
    "type": "post",
    "url": "/book/add",
    "title": "添加预约",
    "name": "add",
    "group": "book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoName",
            "description": "<p>摄影师的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "book"
  },
  {
    "type": "post",
    "url": "/book/del",
    "title": "删除预约",
    "name": "del",
    "group": "book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>需要删除预约的的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "book"
  },
  {
    "type": "post",
    "url": "/book/get",
    "title": "查询预约",
    "name": "get",
    "group": "book",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>返回预约列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "book"
  },
  {
    "type": "post",
    "url": "/book/getpho",
    "title": "按照摄影师查询预约",
    "name": "getpho",
    "group": "book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>摄影师的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>返回预约列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "book"
  },
  {
    "type": "post",
    "url": "/book/getuser",
    "title": "按照用户查询预约",
    "name": "getuser",
    "group": "book",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>返回预约列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/bookRouter.js",
    "groupTitle": "book"
  },
  {
    "type": "post",
    "url": "/how/delete",
    "title": "用户删除自己发布的评论",
    "name": "用户删除自己发布的评论",
    "group": "how",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>删除评论对应的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/how/list",
    "title": "用户查看自己发布的所有评论",
    "name": "用户查看自己发布的所有评论",
    "group": "how",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>用户自己所有的评论信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/how/add",
    "title": "用户添加自己的评论",
    "name": "用户添加自己的评论",
    "group": "how",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "star",
            "description": "<p>评分（1-5）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staffName",
            "description": "<p>摄影师名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/how/all",
    "title": "管理员查看所有评论",
    "name": "管理员查看所有评论",
    "group": "how",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>所有用户的评论信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/how/pages",
    "title": "管理员页面分页查询",
    "name": "管理员页面分页查询",
    "group": "how",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>查询第几页数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页几条数据</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>用户自己所有的评论信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allCount",
            "description": "<p>总页数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/how/score",
    "title": "通过工作人员姓名查找平均分（前端传phpName）",
    "name": "通过工作人员姓名查找平均分",
    "group": "how",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staffName",
            "description": "<p>员工名字</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页几条数据</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>对应摄影师满意度</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/how/byKw",
    "title": "通过搜索关键字得到摄影师对应信息",
    "name": "通过搜索关键字得到摄影师对应信息",
    "group": "how",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>查询第几页数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页几条数据</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>用户自己所有的评论信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allCount",
            "description": "<p>总页数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/howRouter.js",
    "groupTitle": "how"
  },
  {
    "type": "post",
    "url": "/login/add",
    "title": "添加管理员",
    "name": "add",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>管理员账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>管理员密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leavel",
            "description": "<p>管理员等级</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/loginRouter.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/login/del",
    "title": "删除管理员",
    "name": "del",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>管理员的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/loginRouter.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/login/get",
    "title": "查询管理员",
    "name": "get",
    "group": "login",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>查询到的管理员列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/loginRouter.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/login/getone",
    "title": "管理员登录",
    "name": "getone",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>管理员账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>管理员密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/loginRouter.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/login/getup",
    "title": "管理员登录",
    "name": "getup",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>管理员的id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>查询的管理员信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/loginRouter.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/login/updata",
    "title": "修改管理员",
    "name": "updata",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>管理员的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>管理员的账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>管理员的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leavel",
            "description": "<p>管理员的等级</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/loginRouter.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/order/add",
    "title": "添加订单",
    "name": "add",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoid",
            "description": "<p>摄影师id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picid",
            "description": "<p>照片的id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/orderRouter.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/order/del",
    "title": "删除订单",
    "name": "del",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/orderRouter.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/order/get",
    "title": "查询订单",
    "name": "get",
    "group": "order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>订单查询列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/orderRouter.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/order/getone",
    "title": "按照用户查询订单",
    "name": "getone",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>订单查询列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/orderRouter.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/pic/add",
    "title": "添加客样照",
    "name": "add",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photer",
            "description": "<p>摄影师_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "imgs",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phpType",
            "description": "<p>摄影类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "states",
            "description": "<p>发布状态</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/del",
    "title": "删除客样照",
    "name": "del",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>客样照id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "imgs",
            "description": "<p>图片路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/get",
    "title": "查询所有客样照",
    "name": "get",
    "group": "pic",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>客样照数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/getById",
    "title": "客样照id查询客样照",
    "name": "getById",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>客样照id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>客样照数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/getByKwd",
    "title": "关键词查询客样照",
    "name": "getByKw",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>客样照数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/getByPage",
    "title": "分页查询客样照",
    "name": "getByPage",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>查询页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>客样照数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/getByPhpId",
    "title": "摄影师id查询客样照",
    "name": "getByPhpId",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>摄影师id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>客样照数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/like",
    "title": "点赞",
    "name": "like",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>客样照id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "like",
            "description": "<p>点赞数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/look",
    "title": "浏览",
    "name": "look",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>客样照id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "look",
            "description": "<p>浏览数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/pic/update",
    "title": "修改客样照",
    "name": "update",
    "group": "pic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>客样照_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photer",
            "description": "<p>摄影师_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phpType",
            "description": "<p>摄影类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "imgs",
            "description": "<p>图片路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "look",
            "description": "<p>浏览</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "like",
            "description": "<p>点赞</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "states",
            "description": "<p>发布状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "imgsChange",
            "description": "<p>是否修改了图片</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "imgsBeforeUpdate",
            "description": "<p>修改前图片路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/picRouter.js",
    "groupTitle": "pic"
  },
  {
    "type": "post",
    "url": "/upload",
    "title": "上传图片",
    "name": "upload",
    "group": "upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "key",
            "description": "<p>自定义字段名(pic/how...)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "imgs",
            "description": "<p>图片路径数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stack",
            "description": "<p>错误信息</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/upload.js",
    "groupTitle": "upload"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "添加用户",
    "name": "add",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>用户电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>用户订单数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/del",
    "title": "删除用户",
    "name": "del",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avator",
            "description": "<p>用户头像地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/get",
    "title": "添加用户",
    "name": "get",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>查询用户列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/getone",
    "title": "按id查询用户",
    "name": "getone",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>查询用户列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/page",
    "title": "分页查询",
    "name": "page",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页面显示数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": "<p>查询用户列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/user/updata",
    "title": "修改用户",
    "name": "updata",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>用户电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>用户订单数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "passWord",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>错误原因</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "user"
  }
] });
