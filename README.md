# 오늘의 일기

## 구현 코드

### 일기 추가 시

상위 컴포넌트인 `App.tsx`에서 `createContent()`를 선언하고, 하위 컴포넌트인 `DailyEditor.tsx`에서 `createContent()`실행

```ts
const createContent = (author: string, content: string, emotion: number) => {
  const create_date = new Date().getTime();
  const newItem: IFdata = {
    author,
    content,
    emotion,
    create_date,
    id: dateId.current,
  };
  dateId.current += 1;
  setState([newItem, ...state]);
};
```

### 일기 삭제 시

상위 컴포넌트인 `App.tsx`에서 `onDelClick()`를 선언하고, 하위 컴포넌트인 `DailyItem.tsx`에서 `onDelClick()`실행

```ts
const onDelClick = (id: number) => {
  setState(state.filter((item: IFdata) => item.id !== id));
};
```

### 일기 수정 시

상위 컴포넌트인 `App.tsx`에서 `onEditClick()`를 선언하고, 하위 컴포넌트인 `DailyItem.tsx`에서 `onEditClick()`실행

```ts
const onEditClick = (id: number, newContent: string) => {
  setState(state.map((value: IFdata) => (value.id === id ? { ...value, content: newContent } : value)));
  // App의id와 DailyItem의 id가 같으면 content의 값을 DailyItem에서 수정한 값으로 교체 아니면 그대로 유지
};
```
