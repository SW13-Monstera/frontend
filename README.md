<h1 align="center">
	🧑‍💻 CS BROKER
</h1>

<img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/SW13-Monstera/frontend&count_bg=%234E416D&title_bg=%23727272&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" alt="hits" align='right' style='margin-left:5px;' />

<img src="https://img.shields.io/badge/version-v0.0.1-blue" alt="version0.0.1" align='right' style='margin-left:5px;'/>

🔗 배포: <https://csbroker.io>

<br/>

## 👋 소개

마피아 게임을 웹에서 설치 없이 간편하게 즐겨보세요! 🔫

귀여운 자체 제작 캐릭터와 애니메이션이 기다리고 있어요 💜

<br/>

## ✨ 기능

- 👤 깃헙 OAuth 로그인
- ⭐ 게임 이벤트 애니메이션
- ⏰ 실시간 타이머 기반 밤/낮 테마 전환
- 💬 밤 / 낮 및 직업별 실시간 채팅
- 🌞 낮 유저별 투표
- 🌝 밤 직업별 다양한 상호작용
- 🥇 유저별 점수 시스템
- 📊 유저별 통계 시스템

<br/><br/><br/>

## 🛠 기술 스택

![기술 스택](https://user-images.githubusercontent.com/63906230/189886625-c46a11d1-e649-4ea9-a713-320e6fda05ce.png)

<br/><br/><br/>

## 📂 프로젝트 구조

```
📁 MAFIA31
├── README.md
├── lerna.json
├── package.json
└── 📁 packages
    ├── 📁 client
    │   ├── 📁 public
    │   ├── package.json
    │   └── src
    │       ├── App.tsx
    │       ├── 📁 components
    │       ├── 📁 constants
    │       ├── 📁 containers
    │       ├── 📁 contexts
    │       ├── 📁 hooks
    │       ├── 📁 pages
    │       ├── 📁 styles
    │       ├── 📁 templates
    │       ├── 📁 types
    │       └── 📁 utils
    ├── 📁 domain
    │   ├── 📁 constants
    │   ├── 📁 types
    │   └── package.json
    └── 📁 server
        ├── 📁 api
        ├── 📁 config
        ├── 📁 constants
        ├── 📁 loaders
        ├── 📁 models
        ├── 📁 sockets
        ├── 📁 stores
        └── package.json

```

<br/><br/><br/>

## 📜 설치 가이드

### 프로젝트 가져오기

```
git clone https://github.com/boostcampwm-2021/web31-MAFIA31.git
```

### 코드 실행하기

`packages/client/.env`와 `packages/server/config/*.config.json` 설정 후

```
yarn install
yarn start:dev
```

코드 실행후 http://localhost:3000 에서 확인 가능합니다!

<br/><br/><br/>

## 🤙🏻 협업 내용

- [그라운드 룰][ground-rule]
- [컨벤션][convention]
- [팀 노션][notion]
- [피그마][figma]

<br/><br/><br/>

## 👩🏻‍💻 팀원

|                      **Kim-Hyunjo**                      |                      **kshired**                      |                      **ekzm8523**                      |
| :------------------------------------------------------: | :---------------------------------------------------: | :----------------------------------------------------: |
| <img src="https://github.com/Kim-Hyunjo.png" width="80"> | <img src="https://github.com/kshired.png" width="80"> | <img src="https://github.com/ekzm8523.png" width="80"> |
|         [김현조](https://github.com/Kim-Hyunjo)          |         [김성일](https://github.com/kshired)          |         [민재원](https://github.com/ekzm8523)          |

[ground-rule]: https://github.com/SW13-Monstera/.github/wiki/Ground-Rule
[convention]: https://github.com/SW13-Monstera/.github/wiki/Convention
[notion]: https://seed-cry-ce7.notion.site/QUARTER-f5f30a4b31264ae48129812cfb6e67f0
[figma]: https://www.figma.com/file/aBDgy14qYv8oEiqC6n8p4S/CS%2BBROKER-(1)?node-id=0%3A1
