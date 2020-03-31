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
  }
] });