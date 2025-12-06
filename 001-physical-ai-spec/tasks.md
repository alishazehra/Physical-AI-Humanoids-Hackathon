# Tasks: Physical AI Book

**Input**: Design documents from `specs/001-physical-ai-spec/`
**Prerequisites**: `plan.md`, `spec.md`

## Phase 1: Setup

**Purpose**: Project initialization.

- [x] T001 Initialize Docusaurus project in the `Physical AI Book/` directory.

---

## Phase 2: Foundational

**Purpose**: Core infrastructure that must be complete before content is added.

- [x] T002 Clean up default Docusaurus content (e.g., sample pages, blog posts).
- [x] T003 Configure `Physical AI Book/docusaurus.config.ts` with the book's title, theme, and navigation settings.
- [x] T004 Create a lesson template at `.specify/templates/lesson-template.md`.

---

## Phase 3: User Story 1 - Reader Accesses a Lesson (Priority: P1) 🎯 MVP

**Goal**: A reader can navigate to the first chapter and read three distinct lessons.

**Independent Test**: Run the Docusaurus development server. Navigate to "Chapter 1: Introduction to Physical AI" and verify that three lessons are present, readable, and correctly formatted.

### Implementation for User Story 1

- [x] T005 [US1] Create the chapter directory: `Physical AI Book/docs/01-introduction/`.
- [x] T006 [US1] Create the first lesson file `Physical AI Book/docs/01-introduction/01-what-is-physical-ai.md` using the lesson template.
- [x] T007 [P] [US1] Create the second lesson file `Physical AI Book/docs/01-introduction/02-hello-world-example.md` using the lesson template.
- [ ] T008 [P] [US1] Create the third lesson file `Physical AI Book/docs/01-introduction/03-key-principles.md` using the lesson template.
- [ ] T009 [US1] Configure the sidebar in `Physical AI Book/sidebars.js` (or equivalent) to display the new chapter and its three lessons in the correct order.

**Checkpoint**: User Story 1 is functional. The book is readable and structured.

---

## Phase 4: User Story 2 - Contributor Creates a New Lesson (Priority: P2)

**Goal**: A contributor has clear instructions on how to add a new lesson to the book.

**Independent Test**: A new contributor can follow the `CONTRIBUTING.md` guide, use the `lesson-template.md`, and see their new lesson appear correctly in a local build of the book.

### Implementation for User Story 2

- [ ] T010 [US2] Create a `CONTRIBUTING.md` file at the repository root that explains the process of creating and adding a new lesson.

**Checkpoint**: User Story 2 is complete. The project is ready for external contributions.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and cleanup.

- [ ] T011 Run the local Docusaurus development server (`npm run start` in `Physical AI Book/`) and verify all content renders correctly.
- [ ] T012 Build the static site (`npm run build` in `Physical AI Book/`) and ensure there are no build errors.

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Stories (Phase 3 & 4)**: Depend on Foundational phase completion.
- **Polish (Phase 5)**: Depends on all user stories being complete.

### User Story Dependencies
- **User Story 1 (P1)**: Can start after the Foundational phase.
- **User Story 2 (P2)**: Can start after the Foundational phase. It is independent of User Story 1.

### Parallel Opportunities
- Tasks T007 and T008 within User Story 1 can be developed in parallel after T006 is structured.
- User Story 1 and User Story 2 can be worked on in parallel after the Foundational phase is complete.