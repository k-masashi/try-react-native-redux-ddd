# try-react-native-redux-ddd

## これは何か
React Native + Redux + レイヤードアーキテクチャ(DDD)の実装の素振り。

## アーキテクチャ

![スクリーンショット 2022-11-14 18 41 12](https://user-images.githubusercontent.com/8385632/201626937-de1ce2bd-09e9-4a34-9ff6-d4c7515abcf6.png)


## レイヤー
このサンプルでは下記の４つのレイヤーに分けている。

### UI
View, Presenterの役割を担う。フロントエンドの入出力のコントローラーとしての役割を持つ。

### UseCase
アプリケーションのユースケース。

### Domain (DIP)
ドメインを取り扱うレイヤー。
このレイヤーが技術的な問題でなく、ドメインに焦点を当てるため、依存関係逆転の原則で依存をドメイン層に向けている。

### Infra
技術的な関心ごとを扱うレイヤー。

## 利用技術
- React Native
- React Redux(ToolKit, Thunk)
- InversifyJS

## DI
DIを実現するために、InversifyJSを利用。
各レイヤーを独立させるために、DIコンテナを`inversify.config.ts`に定義している。



