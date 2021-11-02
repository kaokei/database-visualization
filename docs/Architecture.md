## 服务器信息 tb_server

增删改查，不允许改配置，只能删除后新增

增加同步数据功能，同步当前服务器上所有数据库

Name: Testing7

```
Host
Port
Username
Password
```

## 数据库 tb_database

增删改来源于服务器的同步操作

增加



同一个服务器环境下有多个数据库：Database

contest_exam
contest_schedule
contest_support

## 表 tb_table

同一个数据库中有多张表，表不用手动指定，默认就是全部收集信息

user_exam
user_login
user_reg

## 表结构 tb_field

字段表
服务器名 数据库名 表名 字段名

字段关系表
字段 A 字段 B 1v1 1vN NvN Nv1

## 表之间关系表 tb_table_relation

因为是无向图，所以规定第 1 个 id 小于第 2 个 id

表之间的关系是一对一 一对多 多对一 多对多

## 字段之间关系表 tb_field_relation

因为是无向图，所以规定第 1 个 id 小于第 2 个 id

字段与字段之间链接关系

外键字段

冗余字段
