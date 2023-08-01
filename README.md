# Project GAGA
> Naver Cloud 개발자 양성 과정 2기  '팀 비트-원'  
> 신희성, 전유빈, 윤예슬, 이현석, 임  철


### 📱웹 앱 소개  
가치, 가자 - 국내의 오프라인 모임을 지원하는 온라인 플랫폼 가가.  
가가는 회원가입시 인증 절차를 통해 신원이 확실한 사람들의 안전한 모임을 지원하는 모임 지원 플랫폼 입니다.  
여러 모임 리더들의 모임 주최 내역과 리뷰를 확인하여 마음에 드는 모임에 참여하거나, 직접 모임의 장소, 날짜, 목적을 정해 모임을 주최해 보세요.  
모임을 만들고 자신의 재능을 제공하여 수익을 창출할 수도 있습니다.  
또 마음과 취향이 맞는 사람들과 클럽이라는 온라인 공간에서 지속적인 모임을 가져 볼 수도 있어요.  
마지막으로, 가가는 내부 채팅을 지원하기 때문에 전화번호나, 카카오톡 ID와 같은 프라이빗한 정보 공개의 부담없이 소통을 이어가실 수 있습니다.  

➕ 주요 기능
<pre>
  ·사람들 간의 오프라인 모임 지원 플랫폼  
  ·온라인 소통 공간인 클럽 제공  
  ·다양한 모임 목적 제공  
  ·구체적인 모임 생성 및 검색 위한 필터 제공  
  ·카카오톡과 같은 내부 채팅 기능 제공 
  ·내부 알림 기능 제공  
  ·프로필을 꾸밀 수 있고, 프로필 페이지를 통해 소통 가능
</pre>

### 💼프로젝트 산출물  

* 프로젝트 발표 영상  
[![Video Thumbnail](http://img.youtube.com/vi/-J3Eb-AVBCs/0.jpg)](https://youtu.be/-J3Eb-AVBCs)
<pre>
  발표 담당 부분 타임라인(영상 댓글 참조)
  개발 의도 : 00:00:55 ~ 00:05:10
  기술 소개 : 00:21:12 ~ 00:28:40
</pre>
* GAGA 시연 영상  
[![Video Thumbnail](http://img.youtube.com/vi/Z6uKVdweKa0/0.jpg)](https://youtu.be/Z6uKVdweKa0)
     
* [프로젝트 기술서](https://drive.google.com/file/d/12P-sJh_LBGfpdKDXpJZ0g6W9TEA003dw/view?usp=drive_link)   
* [프로젝트 보고서](https://acrobat.adobe.com/link/review?uri=urn%3Aaaid%3Ascds%3AUS%3Ad361e49b-10db-41c1-a09c-3329c2863099)  
     - 프로젝트 개요 : 시스템 개요, 업무 영역, 예상 효과, 기술적 고려사항, 개발 이력, Architectures  
     - 분석 산출물 : Use Case Modeling, Application Modeling, 화면분석, 데이터분석  
     - 설계 산출물 : Application Modeling, 화면 분석, 데이터 분석
### 👤역할 및 담당 업무
- 팀장: 기술 표준 선택, 설계 표준 작성, 개발 일정 관리, 기술 지원  
- React, Express Git 관리자 : React, Express 개발 환경 구성 및 Source 관리, Spring Boot 개발 환경 구성  
- CI/CD 관리자 : 젠킨스 CI/CD 구성  
- Cloud Native Operator : VPC구성, Subnet구성, LoadBalancer설정, SSL 인증, Cloud DB 설정, 도커 이미지 관리 등(Docker Compese, Docker File)
- 담당 서브 시스템 : 채팅, 커뮤니티
- 그 외 담당 업무 : Prezi 제작(프레젠테이션), 디버깅

---

### ⚙️담당 서브 시스템 구현 기능
<!-- <details>
  <summary>구현 기능 자세히 보기</summary> -->
  
#### 1. 메인 화면
> 읽지 않은 채팅 메시지의 개수 표시, 읽지 않은 알림 메시지의 유무 표시.
  <div style="display: flex; justify-content: center;">
    <p align="center">
    <img src="https://imgur.com/Dn0eTPj.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
  </div>

#### 2. 채팅 목록 조회
> 모임 및 클럽 생성 시 Socket.IO Room 동적 생성, 채팅 목록 최근 메시지 도착 순으로 정렬,  
> 채팅 방 별 읽지 않은 메시지 수 표시, 최근 메시지 시각 표시.
  <div style="display: flex; justify-content: center;">
    <p align="center">
    <img src="https://imgur.com/O2aNKkq.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
  </div>


#### 3. 채팅 상세 조회
> 채팅 입, 퇴장 알림, 메시지 별 읽지 않은 사람 수, 일자 별 메시지 섹션 분리,  
> 메시지 송신 시각 표시, 분 단위이내 연속 메시지는 송신 시각 마지막 메시지에만 표시,  
> 한 사람의 연속 메시지 송신 시 프로필 사진 최상단에만 표시.
  <div style="display: flex; justify-content: center;">
    <p align="center">
    <img src="https://imgur.com/mt7LBgJ.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
      &nbsp;
    <img src="https://imgur.com/qbJ9jvV.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
  </div>


#### 4. 채팅 부가 기능
> 이미지 전송 기능, 위치 공유 기능, 새 모임 참여 링크 공유 기능.

  <div style="display: flex; justify-content: center;">
    <p align="center">
      <img src="https://imgur.com/33dmjLg.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/5QWOdiX.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/EGP3znI.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/qbJ9jvV.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/N0OUodU.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
    </p>
  </div>


#### 5. 알림 메시지 조회
> 클릭시 관련 모임, 클럽 상세 페이지로 이동 기능.

   <div style="display: flex; justify-content: center;">
    <p align="center">
      <img src="https://imgur.com/IiIVVpn.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
    </p>
  </div>


#### 6. 프로필 및 커뮤니티
> 프로필 사진, 소개, 활동사진(최대 3장) 업로드 및 수정 가능.
> 모임 목적 별 생성 및 참여 횟수에 따른 타이틀(업적) 기능 제공.
> 회원 평가 기능, 평가시 회원 온도 반영, 회원 신고 기능.
> 회원 평가, 신고 중복 체크 기능, 수정 기능.

  <div style="display: flex; justify-content: center;">
    <p align="center">
      <img src="https://imgur.com/LSczWBU.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/SfyopWQ.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/SCMyG85.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
      <img src="https://imgur.com/G2Sy2gD.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
    </p>
  </div>


<!-- </details> -->

---
## ♾️DevOps
![데브옵스](https://imgur.com/Jv8Ex8Z.png)

* 사용 기술
  * Front-end : React 18, React-Router v6, MUI(UI/UX), SWR, Zustand, socket.io-client, react-kakao-maps-sdk
  * Back-end : Spring, MyBatis, Node.js 18 & Express.js, AspectJ, SpringCrypto, AWS-Java-SDK, JavaMailSender, nodemon, aws-sdk&multer-s3, sequelize, socket.io
  * Naver Cloud Platfrom : VPC, Server, Global DNS, Certificate Manager, Cloud DB for MySQL, Load Balancer, CDN+, ObjectStorage
  * Tools : yarn, VITE 4, Maven, Junit, Jenkins, Docker, VS Code, Eclipse
  * WAS : Tomcat(Spring Boot 웹 어플리케이션), NginX(Express.JS 웹 어플리케이션 리버스 프록시)

### 🏗️ 웹 아키텍쳐

![웹아키텍쳐](https://imgur.com/QFAua48.png)  

<details>
  <summary>웹 아키텍쳐 설명 자세히 보기</summary>
  
* Front-end기술로 React를 사용, 최초의 REQ에서 배급된 index.js 코드가 index.html을 렌더링하는 CSR을 사용하였습니다.
* Spring Boot : 채팅 외의 모든 B/L을 수행하고 클라이언트의 요청에 JSON형식의 데이터를 리턴하는 Rest API Server입니다.
* Express.JS : 채팅에 관련된 B/L만 수행하는 Node.JS 기반의 Rest API Server 입니다.
* DataBase : 라이선스 문제가 가장 적은 MySQL을 사용하였습니다. 


</details>

#### 1. Front-end : Vite - React
> SPA 구현으로 네이티브 앱 같이 부드럽고 빠른 화면의 유저 경험을 제공해주는 React 코드

> 의존성 관계 설정, 개발 환경 구성 및 배포, 채팅 및 커뮤니티 화면 전담,
> 팀원들이 구현을 어려워 하는 부분 기술 지원

![프론트엔드사용기술](https://imgur.com/qdFMnZc.png)  

<details>
  <summary>프론트엔드 자세히 보기</summary>
  
  * Node.JS Package 관리 툴로 Yarn을 사용했습니다.
  * Vite 4 : 개발 서버와 번들러를 제공하는 도구입니다. 개발 환경에서는 HMR (Hot Module Replacement)과 같은 빠른 개발 서버를 제공하고, 프로덕션 빌드에서는 ESbuild를 사용하여 번들링을 처리합니다. 때문에, 번들링 속도가 Webpack과 같은 여타 번들러 보다 월등히 빠릅니다. CI/CD 환경구축 시 지속적인 번들링이 발생할 것으로 예상하여 선택했습니다.
  * React-Roudter(페이지 라우팅) : URI를 파싱하여 요구사항에 맞는 View로 Routing 합니다.
  * MUI(UI/UX) : Material Design 디자인 시스템을 기반으로 한 다양한 React 컴포넌트를 제공하여 UI/UX 구성을 쉽게 도와주는 라이브러리입니다.
  * SWR(Server Data Fetcher) : 서버의 데이터를 쉽게 가져올 수 있게 해주고 클라이언트의 데이터와 서버의 데이터의 동기화를 도와 줍니다. 또한 한번 fetch한 데이터를 캐싱 하기 때문에 매번 API서버에 요청을 보낼 필요가 없게 해줍니다. 이는 성능 향상에 긍정적 영향을 끼칩니다.
  * Zustand(전역 상태 관리) : Props나 useContext로만 상태를 관리하는 것에 한계가 있기에 선택한, 전역상태관리 라이브러리 입니다. 또, 팀 원들이 빠르게 적응해야 했기에 보일러 플레이트 코드가 거의 없어 Redux와 같은 여타 전역상태관리 라이브러리보다 사용법이 간편하여 선택했습니다.
    
</details>

#### 2. Back-end : Spring Boot API Server  
> 채팅 외의 모든 요청 사항을 수행하는 API Server

> Spring Boot Starter 사용법 기술 공유, Spring Boot 버전 선정, 기본적인 의존성 관계 설정, Spring Boot 설계 표준 작성, 세션 및 Cors 관련 Config 설정,  
> 커뮤니티 서브시스템 API 서버 개발(Rest Controller, Model Layer, My Batis SQL Mapper)

![백엔드사용기술스프링](https://imgur.com/kO7dqqy.png)
    
<details>
  <summary>스프링부트 API Server 자세히 보기</summary>

* 내장 WAS 라이브러리가 Tomcat 9에 의존하는 Spring Boot 2.12 버전 사용.
* 빌드 및 의존성 관리 툴로 Maven 선택.
* 데이터 베이스와 상호작용하는 SQL Mapper로 My Batis 사용.
* Layer 설계
  ![모델레이어](https://i.imgur.com/dyWozom.png)
  * Model Layer를 다시 한 번 Service Layer와 Persistence Layer로 구분.
  * Persistence Layer는 DB와의 상호작용(CRUD)에 집중.
  * Service Layer 는 Persistence Layer에 정의된 데이터베이스 상호 작용을 조합하여 B/L 수행.
  * Control Layer 에서는 Service Layer의 Interface에 의존 -> 각 레이어간의 느슨한 결합 유지 및 코드 유지보수성 향상.
  * Control Layer 에서는 Service Layer에 의존 중이므로 Persistence Layer와 데이터베이스간의 상호작용에 대한 절차은닉 달성.
      
* 시스템 알림 및 자동 채팅 메시지 발송을 위한 AOP 구성
  ![Imgur](https://i.imgur.com/5zzKr4T.png)
  * 기존 모임 기반 모임 생성시 기존 모임 채팅방에 새 모임 참여하기 링크 자동 발송.
  * 모임 참여 신청 멤버의 정식 멤버 승격 시 참여를 신청한 회원에게 정식 멤버로 승격되었음을 알림.
  * 정식 멤버로 승격되어 채팅방 자동 입장시, 채팅방 내부 입장 알림.
  * 모임 리더가 모임 채팅방 삭제 시 채팅방이 삭제되었음을 알림.
  -> 채팅 서브시스템과 연계된 타 서브시스템과의 코드 결합도를 떨어뜨리기 위해 after handle로 weaving하여 cross concern 수행.

</details>

#### 3. Back-end : Express.JS API Server
> Socket.IO를 활용, 채팅과 알림 등 클라이언트와 실시간 상호작용을 전담해서 처리하는 채팅 API Server

> 서버 구성 및 모델 정의, Socket.IO NS, Room 구조 설계 개발 모두 담당.

![익스프레스서버기술](https://imgur.com/gYLtoVv.png)

<details>
  <summary>Express API Server 자세히 보기</summary>

* 요구사항 매핑과 비즈니스 로직 수행을 함께 하는 Router 구성
* 데이터 베이스와의 상호작용을 위해 ORM인 Sequelize 사용
* Persistence Layer는 Sequelize 객체를 확장해 Model을 정의하고 이를 라우터에서 Import하여 사용

</details>

### ☁️ Cloud Infra
> Naver Cloud Platfrom 기반의 Cloud 구성
> On Demand 방식으로 Infra 구성 및 확장 용이
> SPOF(Single Point Of Failure)의 Fail Over 설정
> 코드 취합, 빌드 배포 자동화를 위한 CI/CD 구성
> Object Storage 관련 설정 외 모든 부분 전담
 
#### 1. VPC 설계

#### 2. CI/CD 구성

### ✔️문제 해결 부분
### 🔧아쉬운 점 & 개선 방향
### 💭프로젝트 소감
