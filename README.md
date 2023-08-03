# Project GAGA
> Naver Cloud 개발자 양성 과정 2기  '팀 비트-원'  
> 신희성, 전유빈, 윤예슬, 이현석, 임  철

## 🚀바로가기
### [1.📱웹 앱 소개](#웹-앱-소개)
### [2.💼프로젝트 산출물](#프로젝트-산출물)
### [3.👤역할 및 담당 업무](#역할-및-담당-업무)
### [4.⚙️담당 서브 시스템 구현 기능](#section4)
### [5.♾️DevOps](#DevOps)
### [6.🏗️웹 아키텍쳐](#웹-아키텍쳐)
### [7.☁️Cloud Infra](#Cloud-Infra)
### [8.💽ERD](#ERD)
### [9.✔️문제 해결 부분](#✔️문제-해결-부분)
### [10.📊프로젝트 기여도](#프로젝트-기여도)
### [11.💭프로젝트 소감 및 의의](#프로젝트-소감-및-의의)

---

### 📱웹 앱 소개  
> 가치, 가자 - 국내의 오프라인 모임을 지원하는 온라인 플랫폼 가가.  
* 가가는 회원가입시 인증 절차를 통해 신원이 확실한 사람들의 안전한 모임을 지원하는 모임 지원 플랫폼 입니다.  
* 여러 모임 리더들의 모임 주최 내역과 리뷰를 확인하여 마음에 드는 모임에 참여하거나, 직접 모임의 장소, 날짜, 목적을 정해 모임을 주최해 보세요.  
* 모임을 만들고 자신의 재능을 제공하여 수익을 창출할 수도 있습니다.  
* 또 마음과 취향이 맞는 사람들과 클럽이라는 온라인 공간에서 지속적인 모임을 가져 볼 수도 있어요.  
* 마지막으로, 가가는 내부 채팅을 지원하기 때문에 전화번호나, 카카오톡 ID와 같은 프라이빗한 정보 공개의 부담없이 소통을 이어가실 수 있습니다.  

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

### 💼프로젝트 산출물  [🔝](#바로가기)

* 소스 코드  
[Github - https://github.com/SHINISEONG/gaga_union](https://github.com/SHINISEONG/gaga_union)

* 프로젝트 발표 영상  
[![Video Thumbnail](http://img.youtube.com/vi/-J3Eb-AVBCs/0.jpg)](https://youtu.be/-J3Eb-AVBCs)
<pre>
  발표 담당 부분 타임라인(영상 댓글 참조)
  개발 의도 : 00:00:55 ~ 00:05:10
  기술 소개 : 00:21:12 ~ 00:28:40
</pre>
* GAGA 시연 영상  
[![Video Thumbnail](http://img.youtube.com/vi/Z6uKVdweKa0/0.jpg)](https://youtu.be/Z6uKVdweKa0)
     
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
<a name="section4 />
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
> 리버스 무한 스크롤 적용.
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

<details>
  <summary>사용 기술 자세히 보기</summary>

  * Front-end : React 18, React-Router v6, MUI(UI/UX), SWR, Zustand, socket.io-client, react-kakao-maps-sdk
  * Back-end : Spring, MyBatis, Node.js 18 & Express.js, AspectJ, SpringCrypto, AWS-Java-SDK, JavaMailSender, nodemon, aws-sdk&multer-s3, sequelize, socket.io
  * Naver Cloud Platfrom : VPC, Server, Global DNS, Certificate Manager, Cloud DB for MySQL, Load Balancer, CDN+, ObjectStorage
  * Tools : yarn, VITE 4, Maven, Junit, Jenkins, Docker, VS Code, Eclipse
  * WAS : Tomcat(Spring Boot 웹 어플리케이션), NginX(Express.JS 웹 어플리케이션 리버스 프록시)

</details>

---

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
  * Zustand(전역 상태 관리) : Props나 useContext로만 상태를 관리하는 것에 한계가 있기에 선택한, 전역상태관리 라이브러리 입니다. 또, 팀 원들이 빠르게 적응해야 했기에 보일러 플레이트 코드가 거의 없어 Redux와 같은 여타 전역상태관리 라이브러리와 달리 사용법이 간편하여 선택했습니다.
    
</details>

#### 2. Back-end : Spring Boot API Server  
> 채팅 외의 모든 요청 사항을 수행하는 API Server

> Spring Boot Starter 사용법 기술 공유, Spring Boot 버전 선정, 기본적인 의존성 관계 설정, Spring Boot 설계 표준 작성, 세션 및 CORS 관련 Config 설정,  
> 커뮤니티 서브시스템 API 서버 개발(Rest Controller, Model Layer, My Batis SQL Mapper)

![백엔드사용기술스프링](https://imgur.com/kO7dqqy.png)
    
<details>
  <summary>스프링부트 API Server 설명 자세히 보기</summary>

* 내장 WAS 라이브러리가 Tomcat 9에 의존하는 Spring Boot 2.12 버전을 사용했습니다.
* 빌드 및 의존성 관리 툴로 Maven을 선택하였습니다.
* 데이터 베이스와 상호작용하는 SQL Mapper로 My Batis를 사용합니다.

</details>

#### 2-1. Spring Boot API Server Layer 설계
  ![모델레이어](https://i.imgur.com/dyWozom.png)
  
  <details>
  <summary>Layer 설계 설명 자세히 보기</summary>
    
  * Model Layer를 다시 한 번 Service Layer와 Persistence Layer로 구분하였습니다.
  * 이러한 설계로 인해 Persistence Layer는 DB와의 상호작용(CRUD)에만 집중할 수 있습니다.
  * Service Layer 는 Persistence Layer에 정의된 데이터베이스 상호 작용을 조합하여 B/L을 수행합니다.
  * Control Layer 에서는 Service Layer의 Interface에 의존 -> 각 레이어간의 결합도를 떨어뜨리고 유지보수를 용이하게 합니다.
  * Control Layer 에서는 Service Layer에 의존 중이므로 Persistence Layer와 데이터베이스간의 상호작용에 대한 절차은닉이 일어납니다.
    
  </details>
  
#### 2-2. 시스템 알림 및 자동 채팅 메시지 발송을 위한 AOP 구성
  ![Imgur](https://i.imgur.com/5zzKr4T.png)
  
  <details>
  <summary>시스템 알림 설명 자세히 보기</summary>
    
  > 기존 모임 기반 모임 생성시 기존 모임 채팅방에 새 모임 참여하기 링크를 자동 발송.  
  > 모임 참여 신청 멤버의 정식 멤버 승격 시 참여를 신청한 회원에게 정식 멤버로 승격되었음을 알림.  
  > 정식 멤버로 승격되어 채팅방 자동 입장시, 채팅방 내부 입장 알림.  
  > 모임 리더가 모임 채팅방 삭제 시 채팅방이 삭제되었음을 알림.  
  * 채팅 서브시스템과 연계된 타 서브시스템과의 코드 결합도를 떨어뜨리기 위해 after handle로 weaving하여 cross concern을 수행합니다.
  * 채팅 서브시스팀과 타 서브시스템 간의 느슨한 결합을 유지하게 해줍니다. 채팅 메시지 변경 및 채팅 API서버 변경시 타 서브 시스템 코드 수정이 불필요 함으로 유지보수성이 향상 됩니다.
    
  </details>

#### 2-3. Class Diagram
![Imgur](https://i.imgur.com/1EYstxH.png)

#### 3. Back-end : Express.JS API Server
> Socket.IO를 활용, 채팅과 알림 등 클라이언트와 실시간 상호작용을 전담해서 처리하는 채팅 API Server

> 서버 구성 및 모델 정의, Socket.IO NS, Room 구조 설계 개발 모두 담당.

![익스프레스서버기술](https://imgur.com/gYLtoVv.png)

<details>
  <summary>Express API Server 자세히 보기</summary>

* 요구사항 매핑과 비즈니스 로직 수행을 함께 하는 Router를 구성하였습니다.
* 데이터 베이스와의 상호작용을 위해 ORM인 Sequelize를 사용합니다.
* Persistence Layer에서 Sequelize 객체를 확장해 Model을 정의하고 이를 라우터에서 Import하여 사용합니다.

</details>

---

### ☁️ Cloud Infra
> Naver Cloud Platfrom 기반의 Cloud 구성
> On Demand 방식으로 Infra 구성 및 확장 용이
> SPOF(Single Point Of Failure)에 대한 Fail Over 설정
> 코드 취합, 빌드 배포 자동화를 위한 CI/CD 구성

> Object Storage 관련 설정 외 모든 VPC, CI/CD 설계 및 구성 전담
 
#### 1. VPC 구성
![VPC설계](https://imgur.com/MypY9iO.png)

<details>
  <summary>VPC 구성 자세히 보기</summary>
  
* VPC IP 대역 10.0.0.0/16
* Public Subnet 대역 10.0.1.0/24
  * 클라이언트 요구사항 별 부하 분산을 위한 2대의 Load Balancer 구성하였습니다.
  * Load Balancer의 헬스 체크로 타겟그룹 서버 장애시 Scale Out으로 Fail Over하여 가용성을 유지합니다.
  * Global DNS와 Certificate Manager를 사용해 SSL 인증서로 Load Balancer SSL 인증이 이루어집니다.
  * Web Server L/B
    * 채팅 외의 모든 업무를 처리하는 웹 서버에 부하를 분산합니다.
    * www.gaga.works로 인입되는 모든 요구사항을 처리합니다.
    * Target Group - Web Server
    * 타겟 그룹에서 https 요청을 알 수 있도록 Tomcat에 X-Fowarded-Proto 관련 설정을 해 두었습니다.
  * Chatting Server L/B
    * 채팅을 전담 해서 처리하는 채팅 서버에 부하를 분산합니다.
    * chat.gaga.works로 인입되는 모든 요구사항을 처리합니다.
    * Target Group - Chatting Server
    * 타겟 그룹에서 https 요청을 알 수 있도록 NginX에 X-Fowarded-Proto 관련 설정을 해 두었습니다.
* Private Subnet 대역 10.0.2.0/24
  * 보안이 중요한 Cloud DB for MySQL을 운용 중 입니다.
* VPC 외부
  * CI/CD를 위한 Jenknis Server를 운용 중 입니다.

</details>

#### 2. CI/CD 구성
![CICD구성](https://imgur.com/fIMMCz0.png)

<details>
  <summary>CI/CD 구성 자세히 보기</summary>

* Web Server 빌드 및 배포 과정(Item 1)
  1. Spring Boot 소스 코드가 저장된 Github Repo에서 코드를 클론해 옵니다.
  2. Maven을 사용해 빌드 합니다.
  3. 산출된 ~.war 파일을 Tomcat 자체 지원 웹 어플리케이션인 Tomcat Manager를 사용해 배포합니다.
  4. Context Root를 /로 설정하여 ROOT.war 형태로 배포되도록 합니다.
     
* React 코드 번들링 및 배포 과정(Item 2)
  1. React 코드와 Express 코드가 저장된 Github Repo에서 코드를 클론해 옵니다.
  2. yarn build 명령어를 사용 VITE의 프로덕션 빌드 번들링 툴인 RollUp을 사용하여 번들링 합니다.
  3. Publish Over SSH Plug-In을 사용하여 번들링 결과물을 Web Server의 스태틱 리소스 디렉토리로 복사하여 Welcome Page로 설정합니다.
     (Web Server의 8022번 포트로 접근 시 tomcat 도커 컨테이너의 22번 포트로 연결됩니다.)
    
* Chatting Server 빌드 및 배포 과정(Item 2)
  1. React 코드와 Express 코드가 저장된 Github Repo에서 코드를 클론해 옵니다.
  2. Publish OVer SSH Plug-In을 사용 하여 Express 코드를 Node.JS 도커 컨테이너로 복사합니다. Nodemon에 의해 코드 변경시 Express 웹 어플리케이션이 재구동 됩니다.

* Item 1 실행시 Item 2가 자동 실행되도록 트리거 설정을 해두었습니다.
  
</details>

---

### 💽ERD
![Imgur](https://i.imgur.com/m9cE1en.png)

---

### ✔️문제 해결 부분
#### 1. 코드 관련 부분
> 웹 어플리케이션 내부 알림 시스템 구현

<details>
  <summary>코드 관련 문제 해결 내용 보기</summary>

* 고려 사항
  * 실시간성  : 회원은 실시간으로 알림을 받을 수 있어야 한다.  
  * 디커플링  : 다른 서브 시스템의 코드에 간섭 없이 구현해야 한다.  
  * 재 사용성 : 이미 Express로 구현해 놓은 메시지 발송 API를 최대한 재사용해야 한다.  
  * 부가 기능 : 알림과 관련된 페이지가 있을 경우 클릭시 알림과 관련된 페이지 조회를 할 수 있어야 한다.
    
* 해결 방법
  * 유저끼리 Direct Message를 주고받을 경우 반드시 송, 수신자가 존재하기에 송신자가 Null일 경우 시스템 메시지로 간주하도록 설계했습니다.
  * 1번 문제는 3번 고려사항을 충족하면 Socket.io를 사용해 클라이언트와 통신하게 되기 때문에 실시간성은 무난하게 해결되는 문제였습니다.
  * 3번 문제는 Spring에서 다른 OpenAPI를 이용할 때처럼 HTTP프로토콜에 맞춰 헤더와 엔티티를 조립 후 요청만 보내면 되는 것이기에 간단히 해결됐습니다.
  * 4번 문제를 해결하기 위해 direct_messages 테이블에 라우팅 경로를 나타내는 path 칼럼을 추가하였습니다.
  * 2번 문제를 해결하기 위해 스프링 AOP를 떠올렸습니다.
    * 고객의 요청에 따라 Model Layer와 상호작용하여 데이터를 조작하는 부분은 모두 Spring Rest Controller에서 처리합니다.
    * 알림을 발송해야 하는 상황을 처리하는 Rest Controller Method가 성공적으로 수행됐을 경우 After Handle로 Weaving하여 알림을 발송하면 타 시스템과의 결합도를 낮출 수 있을 것이라 판단했습니다.
    * 채팅 API 서버를 재사용 하기 위해 HTTP Req Template을 조립하여 채팅 서버에 API 요청을 보냅니다.

  <details>
  <summary>AOP 코드 보기</summary>

  ```java:AlarmAspect.java
  //AlarmAspect.java
    package com.gaga.bo.aop;
	import java.util.HashMap;
	import java.util.Map;
	
	import org.aspectj.lang.JoinPoint;
	import org.aspectj.lang.annotation.AfterReturning;
	import org.aspectj.lang.annotation.Aspect;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.beans.factory.annotation.Qualifier;
	import org.springframework.beans.factory.annotation.Value;
	import org.springframework.http.HttpEntity;
	import org.springframework.http.HttpHeaders;
	import org.springframework.http.MediaType;
	import org.springframework.http.ResponseEntity;
	import org.springframework.stereotype.Component;
	import org.springframework.web.client.RestTemplate;
	
	import com.gaga.bo.service.club.ClubService;
	import com.gaga.bo.service.domain.Club;
	import com.gaga.bo.service.domain.Meeting;
	import com.gaga.bo.service.domain.User;
	import com.gaga.bo.service.meeting.MeetingService;
	import com.gaga.bo.service.user.UserService;
	
	@Aspect
	@Component
	public class AlarmAspect {
		
		///field
		@Value("${expressHost}")
		private String expressHost;
		
		@Autowired
		@Qualifier("userServiceImpl")
		private UserService userService;
		
		@Autowired
		@Qualifier("clubServiceImpl")
		private ClubService clubService;
		
		@Autowired
		@Qualifier("meetingServiceImpl")
		private MeetingService meetingService;
		
		
		public AlarmAspect() {
		
			System.out.println(this.getClass());
		
		}
		
		@SuppressWarnings("unchecked")
		@AfterReturning(pointcut = "execution(* com.gaga.bo.web..*.updateMember(..))", returning = "result")
		public void afterMemberUpdate(JoinPoint joinPoint, Object result) throws Exception {
			System.out.println(" :: afterMemberUpdate ::");
			Object[] args = joinPoint.getArgs();
			
			Map<String,String> member = (Map<String,String>) args[0];
			Map<String, Object> alarmReq = new HashMap<String,Object>();
			Map<String, Object> groupChatReq = new HashMap<String,Object>();
			
			String alarmUrl = expressHost+"/rest/chat/alarm";
			String groupChatUrl = expressHost+"/rest/chat";
	
			User user = userService.getUser(Integer.parseInt(member.get("userNo")));
			
			alarmReq.put("receiverNo",member.get("userNo"));
	
			
			groupChatReq.put("content", user.getNickName()+"님이 입장하셨습니다.");
			groupChatReq.put("contentTypeNo", 101);
			
			if(member.get("meetingNo") != null) {
				Meeting meeting = meetingService.getMeeting(Integer.parseInt(member.get("meetingNo")));
				alarmReq.put("content", meeting.getMeetingName()+"모임의 확정 멤버가 되었습니다.");
				alarmReq.put("path","/meeting/meetingno/" + meeting.getMeetingNo());
				
				groupChatReq.put("groupNo", member.get("meetingNo"));
				groupChatUrl=groupChatUrl+"/meeting/message";
			} else {
				Club club = clubService.getClub(Integer.parseInt(member.get("clubNo")));
				alarmReq.put("content", club.getClubName()+"클럽의 확정 멤버가 되었습니다.");
				alarmReq.put("path","/club/no/" + club.getClubNo());
				
				groupChatReq.put("groupNo", member.get("clubNo"));
				groupChatUrl=groupChatUrl+"/club/message";
	
			}
			
			RestTemplate restTemplate = new RestTemplate();
			
			
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON);
	
	        HttpEntity<Map<String, Object>> alarmEntity = new HttpEntity<Map<String, Object>>(alarmReq, headers);
	        HttpEntity<Map<String, Object>> groupChatEntity = new HttpEntity<Map<String, Object>>(groupChatReq, headers);
	        
	        ResponseEntity<String> alarmResponse = restTemplate.postForEntity(alarmUrl, alarmEntity, String.class);
	        ResponseEntity<String> groupChatResponse = restTemplate.postForEntity(groupChatUrl, groupChatEntity, String.class);
	
	        System.out.println(" :: 확정 멤버 aop :: ararmRes :: "+alarmResponse.getBody());
	        System.out.println(" :: 확정 멤버 aop :: groupChatRes :: "+groupChatResponse.getBody());
	
		}
		
		@AfterReturning(pointcut = "execution(* com.gaga.bo.web..*.addMeeting(..))", returning = "result")
		public void afterAddMeeting(JoinPoint joinPoint, Object result ) throws Exception {
			System.out.println(" :: afterAddMeeting ::");
			Object[] args = joinPoint.getArgs();
			
			Meeting argMeeting = (Meeting)args[0];
	
			
			Meeting meeting = meetingService.getMeeting((Integer)result);
			String groupChatUrl = expressHost+"/rest/chat";
			
			System.out.println(" :: result meetingNo :: " + (Integer)result);
			System.out.println(" :: meeting :: " + meeting);
			
			Map<String, Object> req = new HashMap<String,Object>();
	        
			if (argMeeting.getParentClubNo() != 0) {
				
				groupChatUrl += "/club/message";
				meeting.setParentClubNo(argMeeting.getParentClubNo());
				req.put("groupNo", meeting.getParentClubNo());
				
			} else if (argMeeting.getParentMeetingNo() != 0 ) {
				
				groupChatUrl += "/meeting/message";
				meeting.setParentMeetingNo(argMeeting.getParentMeetingNo());
				req.put("groupNo", meeting.getParentMeetingNo());
				
			}
			
			if(meeting.getParentClubNo() != 0 || meeting.getParentMeetingNo() != 0) {
				
				System.out.println(groupChatUrl);
				
				req.put("senderNo", meeting.getMeetingLeaderNo());
				req.put("content", meeting);
				req.put("contentTypeNo", 102);
				RestTemplate restTemplate = new RestTemplate();
						
				HttpHeaders headers = new HttpHeaders();
				headers.setContentType(MediaType.APPLICATION_JSON);
				
				HttpEntity<Map<String, Object>> groupChatEntity = new HttpEntity<Map<String, Object>>(req, headers);
		        ResponseEntity<String> groupChatRes = restTemplate.postForEntity(groupChatUrl, groupChatEntity, String.class);
		                
		        System.out.println(" :: 타 모임 기반 aop :: res :: " + groupChatRes.getBody());
			}
		}
	
	}

  ```

  </details>
  
</details>

#### 2. 인프라 관련 부분
> Load Balancer에 SSL 인증시 Target Group 설정

<details>
  <summary>인프라 관련 문제 해결 내용 보기</summary>
	
* 문제 사항 및 고려 사항
	* 클라이언트에서 로드 밸런서 까지는 HTTPS 프로토콜로 통신이 가능하나 로드 밸런서와 타겟 그룹간 HTTP 통신이 불가하였다.
  * 추가적인 SSL 인증서 발급이나 도메인 발급 없이 Load Balancer 하단의 서버 그룹군 과는 HTTP 통신이 가능하게 해야 한다.
    
* 해결 방법
	* 타겟 그룹에 X-Fowarded-proto 관련 설정을 해 주어야 로드 밸런서에서 헤더에 추가한 X-Forwarded-proto를 파싱하여 HTTPS / HTTP 프로토콜 별 대응이 가능하다.
	* Tomcat 서버의 경우 server.xml에 다음과 같은 설정을 추가 한다.

		<details>
		<summary>server.xml 설정 자세히 보기</summary>  
		
		```xml
		<Connector port="8080" protocol="HTTP/1.1"
			   connectionTimeout="20000"
			   redirectPort="8443" 
			   scheme="https" secure="true" proxyPort="443"
			   xpoweredBy="true" server="Apache" />
		```
		
		</details>

  	* Express 서버의 경우 리버스 프록시 설정이 된 NginX의 default.conf 파일 Server의 Location 부분에 다음과 같은 설정을 추가 한다.

		<details>
		<summary>default.conf 설정 자세히 보기</summary>
		
		```
		location / {
				   proxy_http_version 1.1;
				   proxy_set_header Upgrade $http_upgrade;
				   proxy_set_header Connection 'upgrade';
				   proxy_set_header Host $host;
				   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
				   proxy_set_header X-Forwarded-Proto $scheme;
				   # proxy_set_header X-Forwarded-By $server_addr
				   proxy_pass http://express:8909;
				   proxy_cache_bypass $http_upgrade;
		}
		```
		</details>
</details>

#### 3. WEB 관련 부분
> CORS 문제 및 스프링 세션 유지 문제

<details>
	<summary>WEB 관련 문제 해결 자세히 보기</summary>
 
* 문제 사항 및 고려 사항
	* 클라이언트가 스프링 서버 세션에 접근 시 인가가 제대로 이루어 지지않아 로그인 유지가 되지 않는 문제
	* SOP(Same Origin Policy)위반 으로 인해 다른 출처(API Server)에서 오는 자원 들을 사용할 수 없는 문제

* 해결 방법
	* Spring Boot Web Server
	  * Spring Boot에서는 환경설정을 XML과 같은 Metadata를 통해서가 아니라 Bean을 통한 코드 기반의 환경 설정 기능을 제공합니다.
	  * @Configuration Annotation을 통해, 서버의 Web 관련 환경설정을 제어할 수 있는 WebConfig Bean을 만듭니다.
 	  * 세션 접근 인가 문제는 WebConfig Bean에 withCredentials 헤더를 허용하는 코드를 추가함으로써 해결했습니다.
	  * SOP 위반 문제는 WebConfig Bean에 CORS(Cross Origin Resources Sharing)룰 설정을 추가함으로써 해결했습니다.

		<details>
		<summary>WebConfig.Java 설정 코드 자세히 보기</summary>
		
		```java
		
		package com.gaga.bo.config;
		
		import org.springframework.context.annotation.Bean;
		import org.springframework.context.annotation.Configuration;
		import org.springframework.web.client.RestTemplate;
		import org.springframework.web.servlet.config.annotation.CorsRegistry;
		import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
		
		//Context Package에 위치하여야한다.(당연히 와이어링이 되어야 하기때문에)
		//Configuration Annotation을 통해 메타데이터를 설정한다. XML을 대체, 메소드기반
		@Configuration
		public class WebConfig implements WebMvcConfigurer {
										//반드시 WebMvcConfigurer를 구현하고 있어야한다.
		
			public WebConfig() {
				System.out.println(this.getClass());
			}
			
			//Cors설정을 위해 CorsMappings 메소드를 오버라이딩한다. 
			@Override
			public void addCorsMappings(CorsRegistry registry) {
									  //파라메터인 CorsRegistry클래스의 메소드를 통해 메타데이터를 설정한다.
				registry.addMapping("/**") //Controller Mapping Path에 따라 CORS 허용/불허
		//				.allowedOrigins("http://127.0.0.1:5173")
						.allowedOriginPatterns("https://www.gaga.works:*") //ORIGIN URL에 따라 CORS 허용/불허
						.allowedMethods("*") //Request 메소드에 따라 CORS 허용/불허 
						.allowedHeaders("*") //헤더 설정에 따라 CORS 허용/불허
						.allowCredentials(true); 
						//<client-sever에서 withCredentials: true를 허가한다.
			
			}
	
		}
		
		```
		</details>
	 
	* Express Chatting Server
 		* CORS 룰 설정을 가능케 하는 cors 모듈을 임포트 해 웹앱 설정에 추가해 주었습니다.
			<details>
			<summary>Express CORS rule 설정 코드 자세히 보기</summary>
			
			```javascript
			
			app.use(
			cors({
			origin: [
			  'https://www.gaga.works',
			  'https://www.gaga.works:443',
			],
			credentials: true,
			methods: ['GET', 'POST', 'PATCH', 'DELETE'],
			})
			
			```
			
			</details> 
   </details>
#### 4. 팀 워크 관련 부분
> Front End 기술로 React 선정시 새로운 기술 적응에 대한 우려가 있는 팀원과의 소통

<details>
	<summary>팀 워크 관련 문제 해결 자세히 보기</summary>
 
* 문제 사항 및 고려 사항
	* 네이티브 앱 처럼 동작하는 웹 구현을 위해 팀 프로젝트의 FrontEnd기술로 CSR과 SPA를 지원하는 프레임워크인 React 사용 필요
	* 정규 수업시간에 배운 전통적인 MVC패턴 구현을 위한 기술 스택인 JSP, SPRING BOOT에 아직 어려움을 겪고 있던 팀 원 한 분은 새로운 기술 습득 및 적용에 대한 부담이 우려되는 상황

* 해결 방법
	* 조금 더 늦게까지 남거나 주말간 코딩을 진행하여 저에게 할당된 분량을 먼저 빠르게 처리하였습니다.
	* 그 후 react 기본 hooks, 라이브러리 주요 사용법 등에 관한 예시 코드를 작성하고, 지식을 공유하였습니다.
	* 너무 어려워 하는 부분들은 기술 지원 후 보충 설명을 진행하였습니다.
	* 위 과정들을 통해 팀 원들이 새 기술에 적응 할 수 있다는 생각을 할 수 있도록 장려하였습니다.
	* 결과적으로 저희 팀은 기술에 익숙한 한 사람이 코드를 작성하는 것이, 아닌 각자의 서브시스템에서 백 엔드 부터 프론트 엔드 기술까지 맡은 바 역할을 다 할 수 있었다고 생각합니다.
   
</details>

      

### 🔧아쉬운 점 및 추가하고 싶은 기능
#### 1. 토큰 방식 인증, 인가
<details>
	<summary>자세히 보기</summary>
 
* 선정 이유
	* 전통적인 Session 방식이 아닌 최근 인증과 인가에 많이 사용되는 JWT를 사용해 보고싶어 적용해 보고 싶습니다.
	* 또, JWT의 보안 문제들을 해결할 수 있는 여러 방안들에 대해 고민하고 적용해 보고 싶습니다.
* 추후 관련 지식 습득을 위한 키워드 : JWT, Authentication(인증), Authorization(인가, 권한 부여)
	
</details>
  
#### 2. Chatting Server의 Load Balancing 및 Auto Scaling Issues
<details>
	<summary>자세히 보기</summary>
	
* 선정 이유
	* VPC 구조도에서 Chatting Server 그룹군의 경우 Load Balancer 하위에 하나의 서버만 존재하고 Auto Scailing도 지원되지 않습니다.
 	* 이는 Socket.io에서 관리하는 NameSpace와 Room들이 전부 서버마다 별도 할당 되기 때문에, 유저간 채팅 기능에 문제가 발생하기 때문입니다.
 	* 해결 방안은 찾았으나 메인 프로젝트시 한정된 시간 문제로 끝내 개선시키지 못했기에 많은 아쉬움이 남아서 선택했습니다.
* 개선 방향
 	* 해결책은 Redis를 사용하여 Socket.io를 클러스터 모드로 작동 시키고 분할된 서버들이 통합된 공간의 NameSpace와 Room에 접근하도록 하는 것 입니다.
* 추후 관련 지식 습득을 위한 키워드
	* Redis, Socket.IO Cluster

</details>
   
#### 3. ERD 설계시 chat_rooms Table 삭제
<details>
	<summary>자세히 보기</summary>
	
* 선정 이유
	* 분석/설계 단계에서 채팅방 제목은 모임명과 같게하고 채팅방 멤버는 모임 멤버와 같도록 설계하였기에 chat_rooms와 meetings, clubs가 겹치는 attribute가 많아 굳이 Table을 따로 둘 필요가 없다고 판단하였습니다.
 	* 하지만 최근 메시지 도착 시간이나, 최근 메시지 내용 등 chat_rooms만이 가지는 attribute들이 구현 단계에서 많이 발견되었기 때문에 meetings Table과 clubs Table과 무관한 last_message 칼럼과 last_message_time 칼럼을 추가하게 되었습니다.
	* 이와 같은 설계는 정규화가 제대로 이루어지지 않은 설계이기 때문에 아쉬운 부분으로 선정하였습니다.
* 개선 방향
	* chat_rooms 테이블을 정의하고 해당 테이블에 채팅 방과 관련된 속성들을 칼럼으로 정의.
* 추후 관련 지식 습들을 위한 키워드
	* 분석/설계, 추상화, 데이터 베이스 설계 등

</details>

#### 4. CI/CD시 일시적인 서비스 중단 문제
<details>
	<summary>자세히 보기</summary>

* 선정 이유
	* 로드 밸런서를 통한 배포가 아닌 직접 타겟 그룹들에 접근하여 배포를 진행하기 때문에, 롤링 업데이트가 일어나지 않고 일시적으로 서비스가 중단되는 문제가 있었습니다.
	* Maven 빌드 후 war파일을 먼저 배포한 후 2번 트리거에서 번들링된 react코드가 spring web app의 static 리소스 폴더로 배포될때까지 서비스 중단이 일어나는 문제가 있습니다.
	* Auto-Scale에 의해 생성된 서버들의 경우 새로운 배포판이 적용되지 않는 문제가 있습니다.
* 개선 방향
	* Elastic Load Balancer 혹은 Application LOad Balancer 등을 통한 롤링 업데이트가 일어 날 수 있도록 빌드 배포 과정을 NCP나 AWS와 같은 Cloud 회사에서 제공하는 CI/CD 프로세스를 학습하고 적용합니다.
* 추후 관련 지식 습득을 위한 키워드
	* LoadBalancer, 무중단 배포, 롤링 업데이트, Jenkins, CI/CD 등
  
</details>

#### 5. Web RTC를 활용한 화상 채팅
<details>
	<summary>자세히 보기</summary>

 * 선정 이유
 	* 순수 흥미로 선택하였습니다. Server 기반이 아닌 클라이언트 브라우저끼리의 통신을 기반으로 하기 때문에, 레이턴시가 거의 없는 고화질 영상 통화가 가능하다는 점이 매력적이었습니다.
	* 또 다른 웹 기술에 비해 비교적 최근 기술이라는 점도 끌렸습니다.
 	* 프로젝트 웹 앱의 도메인 관점에서 생각해 보아도 모임을 가졌을때 채팅방 인원 중 한명이 모임 상황을 1:N으로 생중계 하거나 DM채팅 에서 1:1 영상통화가 가능했다면 더 재미있는 웹 앱이 되었을 것이라 생각했습니다.
	* 처음 채팅 서브시스템을 담당할 때 목적이 최대한 카톡과 유사한 채팅이 목표였기 때문에 N:N 채팅 구현역시 재미있었을 것 같습니다.
 * 추후 관련 지식 습득을 위한 키워드
	 * Web RTC
     
</details>

     

### 📊프로젝트 기여도
#### 1. 객관적 기여도
* Commit 기여도 : 37.4%
* 기여 Commit 수 : 166 / 443 Commits
* Code Line 기여도 : 27.6%
* 기여 Line 수 : 155844 / 564592 Lines
  
* 기여도 Info Graphic
  ![Imgur](https://i.imgur.com/pyUBT8h.png)
  ![Imgur](https://i.imgur.com/HxqWhUP.png)
      
#### 2. 주관적 기여도
* 객관적 기여도 외 +8%
* 주관적 기여도에 대한 근거사항
	* 기술 표준 선정
	* 설계 표준 작성
	* 기술 지원
	* 기술 공유
		* 객체지향 개념
		* Spring Framework Model 2 Archtecture MVC 개념
		* React Virtual DOM과 State, 기본 Hooks 사용법, Custom Hooks 제작법 등
		* Spring Boot 프로젝트 구성 방법
		* 각종 라이브러리 사용 방법 및 예시 코드 제공
	* 개발 환경 구성
		* Spring Boot
	 	* React
		* Express

### 💭프로젝트 소감 및 의의
* 개인 Mini 프로젝트만 구현하다가 처음으로 해본 팀 프로젝트였습니다.  
  팀 프로젝트에서 중요한 부분은 리더쉽, 역할 분담, 소통 등 여러 부분이 있겠지만 딱, 한 가지만 뽑자면 '표준'을 뽑고싶습니다.  
  구현 과정이 코드가 되었든, 분석/설계 과정의 서류가 되었든 기준이 없으면 소통이 어렵고, 취합이 어렵다는 점을 느꼈습니다.
  표준은 개인에 대한 공과 과의 판단, 프로젝트 진행시 다양한 선택의 기로에서의 판단 등에 있어, 나침반이 되어준다고 생각합니다.

* 기술적인 측면에서는 먼저, Mini Project에서 경험한 전통적인 MVC 패턴이 아닌 API 서버 개발과 화면을 구성하는 코드를 분리하는 구조를 경험해 본 점이 좋았습니다.
  Spring Boot, Rest API Server와 Client, Session을 통한 인증 유지, AOP를 이용한 모듈간 디커플링 관계 형성, 의존성 설정 등에 대한 개념에 대해,
  기존에는 이론이나 이론을 위한 단편적인 코드로만 이해하고 있었습니다.  
  위와 같은 지식들을 직접 분석하고 설계한 Web App의 Domain에 맞게 녹여 내는 과정을 프로젝트를 통해 거치면서 기술에대한 실질적인 이해도를 높힐 수 있었습니다.
  또, Express, Vite, Socket.IO 등 정규 교육과정에서 다루지 않은 기술들을 Doc을 참조하여 내 것으로 만들고 팀 원들에게 기술 공유 하는 과정을 거쳐,
  결국 메인 프로젝트를 완수하였다는 점에서 처음 보는 기술도 배우고 적용할 수 있다는 자신감을 얻을 수 있는 갚진 시간이었습니다.

* 세상에 완벽한 팀은 없을 것 입니다.
  하지만 내가 먼저 동료이 짐을 덜어 짊어지고 책임을 질 수 있다면 결국 힘든 과정에서도 서로를 이끌어주며 목표를 완수할 수 있다는 점을 배웠습니다.
  때문에 저는 앞으로의 많은 실무 프로젝트를 수행할 때에도 적극적으로 많은 책임을 짊어지는 개발자가 되리라 다짐했습니다.
