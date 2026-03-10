# Command: backlog

## 목적
Feature 설명을 입력하면 **Behavior Driven Backlog Generator Skill**을 사용하여  
Behavior Backlog와 UI Backlog를 생성한다.

각 Backlog는 반드시 다음 구조를 따른다.

Backlog Title  
Success Criteria  
Todo

---

## 사용 방법

/backlog <Feature 설명>

예시

/backlog 사용자 인증 기능 개발

---

## 중요 규칙 (Strict)

반드시 **Behavior Driven Backlog Generator Skill**을 사용한다.

다음 형식은 절대 생성하지 않는다.

- Given
- When
- Then
- Scenario
- Test Case
- Component specification
- Props 정의
- API 설계

이 명령은 **테스트 시나리오 생성 명령이 아니다.**

반드시 **Backlog 형식으로만 출력한다.**

---

## 출력 형식

모든 Backlog는 반드시 다음 구조를 따른다.

Backlog Title  
Success Criteria
- 항목
- 항목
- 항목

Todo
- 작업
- 작업
- 작업

조건

- Success Criteria는 3~4개 작성
- Todo는 최대 5개 작성

---

## 실행 규칙

1. Behavior Driven Backlog Generator Skill을 사용한다
2. Feature 설명을 기반으로 Backlog를 생성한다
3. Behavior Backlog를 먼저 생성한다
4. UI Backlog를 그 다음 생성한다
5. 모든 Backlog는 Title / Success Criteria / Todo 구조를 따른다

---

## 입력

Feature  
{{args}}

---

## 실행 지시

Use the **Behavior Driven Backlog Generator** skill.

Strictly follow the skill rules.

Generate:

1. Behavior Backlog
2. UI Backlog

If the output contains **Given / When / Then** or does not follow the required structure, regenerate the output.