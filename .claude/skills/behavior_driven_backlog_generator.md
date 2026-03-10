# Skill: Behavior Driven Backlog Generator

## 목적
Feature 설명을 입력하면 사용자 행동 흐름과 UI 구성 요소를 기반으로  
Behavior Backlog와 UI Backlog를 생성한다.

각 Backlog는 반드시 아래 구조를 따른다.

Backlog Title  
Success Criteria  
Todo

---

## 중요 규칙 (Strict Rules)

이 Skill은 **BDD 테스트 생성기가 아니다.**

다음 형식은 절대 사용하지 않는다.

- Given
- When
- Then
- Scenario
- Test Case

모든 Backlog는 반드시 다음 구조를 따른다.

Backlog Title  
Success Criteria  
Todo

다른 형식은 생성하지 않는다.

---

## Backlog Title 규칙

### Behavior Backlog

제목 형식은 반드시 아래를 따른다.

사용자가 <행동> 하면 시스템이 <반응> 한다

예

- 사용자가 로그인 버튼을 클릭하면 시스템이 OAuth 인증을 시작한다
- 사용자가 로그인에 성공하면 시스템이 홈 화면으로 이동한다

---

### UI Backlog

제목 형식은 반드시 아래를 따른다.

<UI 요소>가 표시되면 시스템이 <디자인 또는 상태>를 적용한다

예

- 로그인 화면이 표시되면 시스템이 OAuth 버튼 디자인을 적용한다
- 오류 메시지가 표시되면 시스템이 경고 스타일을 적용한다

---

## Backlog 종류

### 1 Behavior Backlog

사용자 행동 흐름을 기준으로 분해한다.

행동 예

- 페이지 진입
- 기능 실행
- 오류 확인
- 성공 결과 확인
- 상태 변경

각 Behavior Backlog는 **하나의 사용자 행동만 포함한다.**

개수 제한 없음.

---

### 2 UI Backlog

화면 또는 컴포넌트 기준으로 분해한다.

예

- 화면 레이아웃
- 버튼
- 메시지
- 상태 표시
- 네비게이션

개수 제한 없음.

---

## Success Criteria 규칙

각 Backlog는 **3~4개의 Success Criteria**를 가진다.

조건

- 사용자가 확인 가능한 결과여야 한다
- 기능 완료 여부를 판단할 수 있어야 한다
- 테스트 가능한 문장이어야 한다
- 시스템 내부 구현이 아닌 사용자 관점으로 작성한다

예

Success Criteria

- 사용자가 로그인 페이지에 접근할 수 있다
- OAuth 로그인 버튼이 화면에 표시된다
- 인증 성공 시 로그인 상태가 유지된다

---

## Todo 규칙

Todo는 **구현 작업 목록이다.**

조건

- 최대 5개
- 개발 작업 중심
- 실제 구현 가능한 단위
- 시스템 내부 구현 관점으로 작성 가능

예

Todo

- 로그인 페이지 UI 구현
- Google OAuth 연동
- Kakao OAuth 연동
- 인증 상태 관리 로직 구현
- 로그인 성공 후 리다이렉트 처리

---

## 출력 구조 (Strict Format)

반드시 아래 구조로 출력한다.

---

Behavior Backlog

Backlog Title  
Success Criteria
- 항목
- 항목
- 항목

Todo
- 작업
- 작업
- 작업

---

UI Backlog

Backlog Title  
Success Criteria
- 항목
- 항목
- 항목

Todo
- 작업
- 작업
- 작업

---

## 출력 규칙

- 모든 Backlog는 Title / Success Criteria / Todo 구조를 가진다
- Success Criteria는 3~4개 작성한다
- Todo는 최대 5개 작성한다
- Given / When / Then 형식은 사용하지 않는다

만약 출력이 규칙을 따르지 않으면 다시 생성한다.

---

## 입력

Feature  
<Feature 설명>

---

## 출력 목표

Feature 설명을 기반으로

1. 사용자 행동 흐름 기반 Behavior Backlog 생성
2. UI 구성 요소 기반 UI Backlog 생성

각 Backlog는 반드시 Title / Success Criteria / Todo 구조를 따른다.