# react-beforeunload

React component and hook which listens to `beforeunload` on the window when mounted.

### `useBeforeunload` Hook 

```jsx
import { useBeforeunload } from 'react-beforeunload';
```

Display a dialog box and confirm "系統將不會儲存您所做的變更，確定要離開嗎？"

```jsx
const [isEdit, setIsEdit] = useState(true);
useBeforeunload(isEdit);
```
[Source Window: beforeunload event](https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload)

