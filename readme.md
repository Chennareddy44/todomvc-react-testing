# Testing

The Todo App project is equipped with a comprehensive suite of tests, ensuring the robustness and reliability of its components. The test files are located in the `__tests__` folder, each focusing on specific functionalities of the application.

## Test Files

1. **app.test.js:**

   - **Purpose:** App component render test.
   - **Description:** Verifies that the App component renders without errors, ensuring the proper integration of Header, Main, and Footer components.

2. **main.test.js:**

   - **Purpose:** Main component tests, including the toggle-all checkbox.
   - **Description:** Covers various scenarios related to the Main component, testing its rendering with different todo states and ensuring the functionality of the toggle-all checkbox.

3. **header.test.js:**

   - **Purpose:** Header component tests, including adding a new item through the input.
   - **Description:** Focuses on testing the Header component's rendering and its ability to add new items through the provided input field.

4. **input.test.js:**

   - **Purpose:** Input component tests, including handling input value, enter key, and onBlur events.
   - **Description:** Ensures that the Input component functions correctly, validating its ability to handle input values, respond to the enter key, and trigger onBlur events.

5. **item.test.js:**

   - **Purpose:** Item component tests, including toggling and removing a todo item.
   - **Description:** Tests the Item component's functionality, covering scenarios related to toggling todo items and removing them from the list.

6. **footer.test.js:**
   - **Purpose:** Footer component tests, including testing the clear completed button.
   - **Description:** Validates the Footer component's behavior, with a focus on testing the clear completed button to ensure it functions as expected.

## Running Tests

To execute the test suite, use the following command in your terminal:

```bash
npm test
```
