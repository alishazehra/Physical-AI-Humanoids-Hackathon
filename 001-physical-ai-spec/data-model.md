# Data Model: Physical AI Book

This document outlines the data model for the Physical AI book. The model is based on a simple file-based structure that is compatible with Docusaurus.

## Entities

### Book

*   **Description**: Represents the entire collection of content for "Physical AI".
*   **Attributes**:
    *   `title`: The title of the book.
    *   `tagline`: A short description of the book.
*   **Representation**: The Docusaurus site configuration (`docusaurus.config.js`).

### Chapter

*   **Description**: A logical grouping of lessons.
*   **Attributes**:
    *   `title`: The title of the chapter.
    *   `description`: A brief overview of the chapter's content.
*   **Representation**: A directory within the Docusaurus `docs` directory. The order is determined by the sidebar configuration.

### Lesson

*   **Description**: A single markdown file containing educational content and a code example.
*   **Attributes**:
    *   `title`: The title of the lesson.
    *   `description`: A brief summary of the lesson's content.
    *   `body`: The main content of the lesson in Markdown format.
    *   `code_example`: A runnable code snippet.
*   **Representation**: A Markdown file within a chapter directory.

## State Transitions

There are no complex state transitions in this model. The state is represented by the file system. Adding, updating, or deleting chapters and lessons is done by manipulating the files and directories.
