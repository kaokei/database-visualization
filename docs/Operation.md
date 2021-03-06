## 用例

1. 新建服务器

> 提交表单
> 同时初始化所有数据，包括

2. 查询服务器列表

> 获取所有服务器，不需要分页
> 包含每一个服务器的详情数据

3. 删除服务器

> 不提供修改服务器的功能，只能删除后再次添加
> 删除服务器后需要删除相关的所有数据库等数据

4. 同步服务器数据

> 获取该服务器上所有数据库，并创建数据库记录
> 没有手动删除数据库的功能，只能同步服务器
> 新增加数据库
> 删除数据库，需要删除数据库对应的表，字段数据
> 修改了数据库名，只需要修改数据库名即可

5. 同步数据库

> 获取该数据库中所有的表，并创建表记录
> 没有手动删除表的功能，只能同步数据库
> 新增加表
> 删除表，需要删除相对应的字段数据
> 修改了表名，只需要修改表名

6. 同步表

> 获取该表有哪些字段，并创建字段记录
> 没有手动删除字段的功能，只能同步表
> 新增加了字段
> 删除了字段
> 修改了字段

7. 新建应用

> 提交表单
> 应用代表一个产品，比如 crm 产品，赛事产品，btoc 产品
> 需要关联相应的数据库

8. 编辑应用

> 提交表单
> 可以增加数据库，删除数据库

9. 同步应用

> 同步所有关联的数据库数据，表数据

#### 新建服务器

同步会造成历史数据丢失，所以需要版本的概念来保留历史记录，并且可以在不同版本中切换。

记录用户操作记录

## 接口记录

1. 创建服务器接口
   1. 需要同步数据：数据库、表、字段
2. 更新服务器名称接口
3. 删除服务器接口
   1. 需要删除关联数据
4. 查询服务器列表接口
   1. 不需要分页
5. 新建应用
6. 编辑应用
7. 删除应用
8. 获取应用列表
9. 同步应用相关的接口
    1. 首先判断数据库是否都存在
    2. 判断这些数据库中的表是否都存在
    3. 判断表中字段是否有变化
    4. 同步操作放到应用层面
    5. 初始化操作放到新建服务器
    6. 删除数据操作放到删除服务器
10. 获取数据库、表、字段以及字段间关系信息
