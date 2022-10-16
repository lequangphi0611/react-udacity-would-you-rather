import { Spinner } from '../src/components/atoms';
import { Layout } from '../src/components/layouts';
import { QuestionList, TabContent, Tabs } from '../src/components/molecules';
import { useQuestions } from '../src/hooks';
import { QuestionsContent } from '../styles/pages/home';

const QUESTION_TABS = [
  { content: 'Unanwsered Questions', index: '1' },
  { content: 'Anwsered Questions', index: '2' },
];

function Home() {
  const { data: questions, isLoading, isFetching } = useQuestions();

  return (
    <div>
      <Tabs defaultActiveTabIndex='1' tabs={QUESTION_TABS}>
        <QuestionsContent useDefaultHeight={!questions}>
          <Spinner isLoading={isFetching || isLoading}>
            {questions && (
              <>
                <TabContent tabIndex='1'>
                  <QuestionList questions={questions.unanswered} />
                </TabContent>
                <TabContent tabIndex='2'>
                  <QuestionList questions={questions.answered} />
                </TabContent>
              </>
            )}
          </Spinner>
        </QuestionsContent>
      </Tabs>
    </div>
  );
}

Home.displayName = 'Home';
Home.getLayout = () => Layout;
Home.authenticated = true;

export default Home;
