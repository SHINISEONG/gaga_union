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
- 팀장: 설계 표준 작성, 개발 일정 관리, 기술 지원  
- React, Express Git 관리자 : React, Express 개발 환경 구성 및 Source 관리, Spring Boot 개발 환경 구성  
- CI/CD 관리자 : 젠킨스 CI/CD 구성  
- Cloud Native Operator : VPC구성, Subnet구성, LoadBalancer설정, SSL 인증, Cloud DB 설정, 도커 이미지 관리 등(Docker Compese, Docker File)
- 담당 서브 시스템 : 채팅, 커뮤니티
- 그 외 담당 업무 : Prezi 제작(프레젠테이션), 디버깅



### ⚙️담당 서브 시스템 구현 기능
##### 1. 메인 화면
> 읽지 않은 채팅 메시지의 개수 표시, 읽지 않은 알림 메시지의 유무 표시.
<div style="display: flex; justify-content: center;">
  <p align="center">
  <img src="https://imgur.com/Dn0eTPj.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
</div>

##### 2. 채팅 목록 조회
> 모임 및 클럽 생성 시 Socket.IO Room 동적 생성, 채팅 목록 최근 메시지 도착 순으로 정렬,  
> 채팅 방 별 읽지 않은 메시지 수 표시, 최근 메시지 시각 표시.
<div style="display: flex; justify-content: center;">
  <p align="center">
  <img src="https://imgur.com/O2aNKkq.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
</div>

##### 3. 채팅 상세 조회
> 채팅 입, 퇴장 알림, 메시지 별 읽지 않은 사람 수, 일자 별 메시지 섹션 분리,  
> 메시지 송신 시각 표시, 분 단위이내 연속 메시지는 송신 시각 마지막 메시지에만 표시,  
> 한 사람의 연속 메시지 송신 시 프로필 사진 최상단에만 표시.
<div style="display: flex; justify-content: center;">
  <p align="center">
  <img src="https://imgur.com/mt7LBgJ.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
    &nbsp;
  <img src="https://imgur.com/qbJ9jvV.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="250"/>
</div>

##### 4. 채팅 부가 기능
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
> <div style="display: flex; justify-content: center;">
  <p align="center">
    <img src="https://imgur.com/IiIVVpn.jpg" alt="이미지1 대체 텍스트" style="flex: 1; margin: 100px;" width="180"/>
  </p>
</div>

##### 6. 프로필
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
