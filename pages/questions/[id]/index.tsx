import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, Spinner } from '../../../src/components/atoms';
import { Layout } from '../../../src/components/layouts';
import { QuestionItem } from '../../../src/components/molecules';
import { useQuestion, useUser, useVoteQuestion } from '../../../src/hooks';
import * as yup from 'yup';
import { useCallback, useMemo } from 'react';
import _, { some, toNumber } from 'lodash';
import { QuestionItemState } from '../../../src/components/molecules/QuestionItem/types';
import { toast } from 'react-toastify';

function Question() {
  const { query } = useRouter();
  const { user } = useUser();

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      option: null,
    },
    resolver: yupResolver(
      yup.object().shape({
        option: yup.string().required(),
      })
    ),
  });

  const {
    data: question,
    isLoading: questionLoading,
    refetch,
  } = useQuestion(query.id as string | undefined);

  const { voteQuestion, isLoading } = useVoteQuestion({
    questionId: question?.id,
    onSuccess() {
      toast.success('Vote the question successfully!');
      refetch();
    },
  });

  const handleSubmit: SubmitHandler<{ option: string | null }> = useCallback(
    ({ option }) => {
      voteQuestion({ option: toNumber(option) });
    },
    [voteQuestion]
  );

  const isVoted = _.chain(question)
    .get('options')
    .some(({ votes }) => some(votes, ({ id }) => id === user?.id))
    .value();
  const questionState: QuestionItemState = isVoted ? 'voted' : 'votable';

  return (
    <>
      <Head>
        <title>{question?.id}</title>
      </Head>
      {questionLoading && <Spinner />}
      <div>
        {question && (
          <Spinner isLoading={questionLoading || isLoading}>
            <Form onSubmit={handleSubmit} {...methods}>
              {question && (
                <QuestionItem item={question} state={questionState} />
              )}
            </Form>
          </Spinner>
        )}
      </div>
    </>
  );
}

Question.displayName = 'VoteQuestion';
Question.getLayout = () => Layout;
Question.authenticated = true;

export default Question;
