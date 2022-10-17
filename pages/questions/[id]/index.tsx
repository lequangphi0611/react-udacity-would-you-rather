import { yupResolver } from '@hookform/resolvers/yup';
import _, { some, toNumber } from 'lodash';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { QuestionItemResponse } from '../../../src/apis/types/QuestionsResponse';
import { Form, Spinner } from '../../../src/components/atoms';
import { Layout } from '../../../src/components/layouts';
import { QuestionItem } from '../../../src/components/molecules';
import { QuestionItemState } from '../../../src/components/molecules/QuestionItem/types';
import { useUser, useVoteQuestion } from '../../../src/hooks';

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
  resolvedUrl,
}) => {
  const authorization = req.cookies['token'];

  if (!authorization) {
    return {
      redirect: {
        destination: `/login?from=${resolvedUrl}`,
        statusCode: 200,
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `${
      req.headers.referer?.substring(
        0,
        req.headers.referer.indexOf(req.headers.host as string)
      ) || 'http://'
    }${req.headers.host}/api/questions/${query['id']}`,
    {
      headers: {
        authorization,
      },
    }
  );

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }
  return {
    props: { question: await res.json() },
  };
};

function Question({ question }: { question: QuestionItemResponse }) {
  const { replace, asPath } = useRouter();
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

  const { voteQuestion, isLoading } = useVoteQuestion({
    questionId: question?.id,
    onSuccess() {
      toast.success('Vote the question successfully!');
      replace(asPath);
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
      <div>
        {question && (
          <Spinner isLoading={isLoading}>
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
