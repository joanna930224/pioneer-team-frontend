# Skill: Behavior Driven Backlog Generator

## 목적
Feature 설명을 입력하면 행동 기반 백로그와 UI 백로그를 생성한다.

각 백로그는 다음 구조를 따른다.

Title  
Success Criteria  
Todo (최대 5개)

---

## 규칙
1. 행동 단위 (Behavior / Flow)
    - 사용자가 무엇을 경험하고 행동하는지 중심
    - 한 항목은 하나의 행동만
2. UI 단위 (Screen / Component)
    - 화면/컴포넌트 단위
    - 디자인 책임 중심
3. 제한
    - UX/디자인 관점 유지
    - 기술/레이어 단위로 쪼개지 말 것

---

## Backlog Title 규칙

행동 백로그 제목 형식:

사용자가 <행동> 하면 시스템이 <반응> 한다

UI 백로그 제목 형식:

<UI 요소>가 표시되면 시스템이 <디자인 또는 상태>를 적용한다

---

## Backlog 종류

### 1 Behavior Backlog
사용자 행동 흐름을 기준으로 분해한다.

예
- 페이지 진입
- 기능 실행
- 오류 처리
- 성공 처리

개수 제한 없음.  
사용자 흐름을 완성하는 최소 단위로 생성한다.

---

### 2 UI Backlog
화면 구성 요소 기준으로 분해한다.

예
- 화면 레이아웃
- 버튼
- 메시지
- 상태 표시

개수 제한 없음.

---

## Success Criteria 규칙

각 Backlog는 3~4개의 Success Criteria를 가진다.

조건

- 테스트 가능해야 한다
- 사용자 관점 검증이어야 한다
- 기능 완료 여부를 판단할 수 있어야 한다

---

## Todo 규칙

Todo는 구현 작업이다.

조건

- 최대 5개
- 개발 작업 중심
- 구현 가능한 단위

---

## 출력 구조

행동 단위 Backlog

Backlog Title  
Success Criteria  
Todo

UI 단위 Backlog

Backlog Title  
Success Criteria  
Todo

---

## 입력 예시

Feature  
사용자 인증 기능 개발

---

## 출력 목표

사용자 행동 흐름과 UI 구성 요소를 기반으로  
Behavior Backlog와 UI Backlog를 생성한다.



## 출력 예시
입력: 사용자 인증 기능 개발

출력:
행동 단위:
- 사용자가 로그인 화면에 진입할 수 있다
- 사용자가 OAuth를 선택해 로그인 시도한다
- 사용자가 로그인 실패 시 오류를 확인할 수 있다
- 사용자가 로그인 성공 시 홈 화면/Navbar에 반영된다

UI 단위:
- 로그인 화면 디자인 및 버튼 배치
- OAuth 버튼 디자인(Google/Kakao)
- 오류 메시지 디자인 및 표시 위치
- Navbar 로그인 상태 표시 디자인