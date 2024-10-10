# Named Components

Very thin utility to name your components properly while assigning classes to them.

```tsx
import styles from "./Component.module.scss";
import { makeDiv, makeH2, makeP } from "named-components";

export const Component = () => {
  return (
    <Container>
      {/* You may pass additional classes */}
      <Title className={isDarkMode && styles.dark}>Some Title</Title>

      <Text className={isDarkMode && styles.dark}>Some Text</Text>
    </Container>
  );
};

const Container = makeDiv(styles.container);

const Title = makeH2(styles.title);

const Text = makeP(styles.text);
```
