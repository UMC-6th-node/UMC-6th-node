### UMC 6기 node.js 스터디용 레포지토리
---
### 로컬과 git 연동하기
1. vscode 에서 프로젝트 진행할 폴더를 만들고 해당 폴더에서 터미널 열기
<br><img width="385" alt="스크린샷 2024-04-03 오후 10 03 46" src="https://github.com/UMC-6th-node/UMC-6th-node/assets/112371013/c5e267e0-b4bb-4810-b233-4ce46d809c0b"></br>
 
2. 다음의 명령어로 clone 받기
```
git clone https://github.com/UMC-6th-node/UMC-6th-node.git
```
3. 복제된 레포지토리에서 내 브랜치(shimmy 자리에 link, gonoe)로 이동
```
cd UMC-6th-node
git checkout shimmy // shimmy 자리에 link, gonoe로 바꾸기
```
---
### 해당 주차 실습
1. 해당 주차 폴더로 이동해서 폴더 생성
```
cd week1
// 이후 week1 폴더에 각자의 폴더 생성
```
2. 해당 폴더에서 실습, 미션 수행하기
3. commit 하기
```
git add .
git commit -m "1주차 실습"
```
4. push 하기 : 내 로컬에 있는 코드를 git의 내 브랜치에 올리기
```
git push origin shimmy // shimmy 자리에 각자 브랜치 이름으로
```
5. merge, pull은 조만간..
