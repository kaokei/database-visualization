## controller 作用

nest g controller [name]

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('prefix')

@Get('prefix')
@Post('prefix')
@Put('prefix')
@Delete('prefix')
@Patch('prefix')
@Options('prefix')
@Head('prefix')
@All('prefix')
@HttpCode('prefix')

@Req() request: Request
@Res() response: Response
@Next() next: Next
@Session() req.session
@Param() req.params | req.params[key]
@Body() req.body | req.body[key]
@Query() req.query | req.query[key]
@Headers() req.headers | req.headers[name]
@Ip() req.ip
@HostParam() req.hosts
```

控制路由，接收请求，返回响应。

注意路由处理函数的方法名是没有限制的。

注意路由处理函数的返回值问题，有两种模式：  
第一种模式就是标准模式，函数返回值是什么就返回什么。支持 Promise 和 Observable。  
第二种模式可以称为底层库专用手动模式，首先需要在路由参数中使用@Res 和@Next 才会触发手动模式。  
当然也可以使用`@Res({ passthrough: true })`不触发手动模式

```ts
// 可以手动控制返回内容
res.status;
res.cookie;
res.header;
```

需要在 module 中配置在 controllers 数组中。

## service 作用

nest g service [name]

提供服务，由 controller 调用

需要在 module 中配置在 providers 中，并可以在 controller 中依赖注入使用。

## module 作用

nest g module [name]

配置 providers 数组，主要是 service  
配置 controllers，配置这个模块的路由规则，可以挂载到其他 module 中  
配置 exports，可以导出 providers  
配置 imports，可以导入其他 module 中的 exports

注意到在 angular 中，module 并不存在树状结构。
在 angular 中，provider 是可以设置为 root 的。相对应的可以在 Nest 中使用@Global()

还有一种动态 module 需要注意

appModule 需要传递给 NestFactory 创建一个 app

## 中间件 middleware

洋葱模型

修改 request 和 response

提前结束请求

可以统计请求耗时

```ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```

module 的装饰器没有提供配置的方式来配置中间件。需要在 module 类中定义 configure 函数来编程式注册中间件。

## 流程图

request <--> middleware...middleware <--> controller --> provider(service repository factory helper)

所有 provider 的生命周期默认是 application 级别的，可以配置为 request-scope。

provider 需要注册，需要注册在 module 中的 providers 数组中。

## 其他备注

nest g resource [name] 快速生成 CRUD 模版代码

controller 和 service 本身并没有做什么，最关键还是需要 entity，才能操作数据库
