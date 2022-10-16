import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { map } from 'lodash';
import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  Button,
  FieldArray,
  FieldGroup,
  FieldItemsConsumer,
  Form,
  InputField,
  Spinner,
  SubmitButton,
} from '../../../src/components/atoms';
import AppendFieldButton from '../../../src/components/atoms/Form/components/AppendFieldButton/AppendFieldButton';
import { Layout } from '../../../src/components/layouts';
import { useCreateQuestion, useCreateQuestionForm } from '../../../src/hooks';
import { composeNames } from '../../../src/utils';
import {
  QuestionCard,
  Separator,
  SubtractButton,
} from '../../../styles/pages/questions/new';

function NewQuestion() {
  const methods = useCreateQuestionForm();

  const { createQuestion, isLoading } = useCreateQuestion({
    onSuccess(_data) {
      toast(`Add the question successfully! `, {
        type: 'success',
      });
    },
  });

  const handleSubmit: SubmitHandler<{ options: { value: string }[] }> =
    useCallback(
      ({ options }) => {
        createQuestion(
          { options: map(options, 'value') },
          {
            onSuccess: () => {
              methods.reset();
            },
          }
        );
      },
      [createQuestion, methods]
    );

  return (
    <div>
      <Form onSubmit={handleSubmit} {...methods}>
        <Spinner isLoading={isLoading}>
          <QuestionCard title='Create New Question'>
            <h5>Complete the question:</h5>
            <h4>Would you rather...</h4>
            <FieldArray name='options'>
              <FieldItemsConsumer>
                {({ fieldName, index, size, removeField }) => {
                  return (
                    <>
                      <FieldGroup name={composeNames(fieldName, 'value')}>
                        <InputField
                          placeholder={`Enter Option ${index + 1} Text Here`}
                        />
                        {size > 2 && (
                          <SubtractButton onClick={removeField}>
                            <RemoveCircleIcon color='action' />
                          </SubtractButton>
                        )}
                      </FieldGroup>
                      {index < size - 1 && <Separator>OR</Separator>}
                    </>
                  );
                }}
              </FieldItemsConsumer>
              <AppendFieldButton />
            </FieldArray>
            <SubmitButton>Create</SubmitButton>
          </QuestionCard>
        </Spinner>
      </Form>
    </div>
  );
}

NewQuestion.displayName = 'NewQuestion';
NewQuestion.getLayout = () => Layout;
NewQuestion.authenticated = true;

export async function getStaticProps() {
  return {
    props: {
      title: 'New Question',
    },
  };
}

export default NewQuestion;
