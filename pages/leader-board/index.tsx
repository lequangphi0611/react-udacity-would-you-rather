import Badge from '@mui/material/Badge';
import { map } from 'lodash';
import { Avatar, Spinner } from '../../src/components/atoms';
import { Layout } from '../../src/components/layouts';
import useUserScore from '../../src/hooks/useUserScore';
import {
  LeaderBoardCard,
  LeaderBoardCardMiddleContent,
  LeaderBoardContent,
  Score,
  ScoreCard,
} from '../../styles/pages/leader-board';

export async function getStaticProps() {
  return {
    props: {
      title: 'Leader Board',
    },
  };
}

function LeaderBoard() {
  const { data: userScore, isLoading, isFetching } = useUserScore();

  console.log(userScore);
  return (
    <>
      {!userScore && <Spinner isLoading={isLoading || isFetching} />}
      {userScore && (
        <div>
          <Spinner isLoading={isLoading || isFetching}>
            <LeaderBoardContent>
              {map(
                userScore?.users,
                ({
                  avatarURL,
                  id,
                  name,
                  totalAnsweredQuestions,
                  totalCreatedQuestion,
                }) => {
                  return (
                    <LeaderBoardCard key={id}>
                      <Avatar size='100px' imageSrc={avatarURL} />

                      <LeaderBoardCardMiddleContent>
                        <h3>{name}</h3>
                        <Score>
                          <span>Answered Questions </span>
                          <span>{totalAnsweredQuestions}</span>
                        </Score>
                        <hr />
                        <Score>
                          <span>Created Questions </span>
                          <span>{totalCreatedQuestion}</span>
                        </Score>
                      </LeaderBoardCardMiddleContent>
                      <ScoreCard titleSize='1.17em' title='Score'>
                        <Badge
                          classes={{
                            badge: 'leader-board-badge',
                          }}
                          showZero
                          badgeContent={
                            totalAnsweredQuestions + totalCreatedQuestion
                          }
                          color='secondary'
                        />
                      </ScoreCard>
                    </LeaderBoardCard>
                  );
                }
              )}
            </LeaderBoardContent>
          </Spinner>
        </div>
      )}
    </>
  );
}

LeaderBoard.displayName = 'LeaderBoard';
LeaderBoard.getLayout = () => Layout;
LeaderBoard.authenticated = true;
export default LeaderBoard;
