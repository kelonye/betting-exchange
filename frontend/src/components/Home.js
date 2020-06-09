import React from 'react';
import { connect } from 'react-redux';
import * as mapDispatchToProps from 'actions';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import moment from 'moment';
import { COINS } from 'config';

const CELL_WIDTH = 50;
const CELL_MARGIN = 2;
const CELL_RADIUS = 2;

const BACK_COLOR = 'deepskyblue';
const LAY_COLOR = '#fb9797';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
  },
  paper: {
    width: 960,
  },
  paperHeading: {
    padding: 20,
    background: theme.palette.isDark ? '#303030' : '#eee',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  paperBody: {
    padding: '30px 0 50px',
  },
  question: {},
  row: {},
  rowHeading: {
    width: 70,
    marginLeft: -70,
  },
  cell: {
    cursor: 'pointer',
    width: CELL_WIDTH,
    height: CELL_WIDTH,
    border: '1px solid white',
    borderRadius: CELL_RADIUS,
    margin: `${CELL_MARGIN}px ${CELL_MARGIN}px ${CELL_MARGIN}px ${CELL_MARGIN}px`,
    '&:hover': {
      opacity: 0.7,
    },
  },
  cellBack: {
    borderColor: BACK_COLOR,
  },
  cellBackHighlight: {
    background: BACK_COLOR,
    color: 'black',
  },
  cellLay: {
    borderColor: LAY_COLOR,
  },
  cellLayHighlight: {
    background: LAY_COLOR,
    color: 'black',
  },
  cellMoney: {
    fontSize: 10,
  },
  heading: {
    // marginLeft: -70,
    margin: '10px 0',
  },
  headingCell: {
    width: CELL_WIDTH * 3 + CELL_MARGIN * 4,
    margin: CELL_MARGIN,
  },
  headingCellBack: {},
  headingCellLay: {},
}));

function Component({}) {
  const classes = useStyles();
  const [day, setDay] = React.useState(moment());
  const backs = [1, 2, 3];
  const lays = [4, 5, 6];

  return (
    <div className={clsx('flex flex--justify-center', classes.container)}>
      <Paper className={clsx(classes.paper)}>
        <div
          className={clsx(
            classes.paperHeading,
            'flex',
            'flex--grow',
            'flex--align-center',
            'flex--justify-center'
          )}
        >
          <IconButton
            color="inherit"
            aria-label="previous day"
            onClick={() => setDay(moment(day).add(-1, 'days'))}
          >
            <ArrowBackIcon />
          </IconButton>
          <div className={'flex flex--grow flex--justify-center'}>
            Day {moment(day).dayOfYear()} ({moment(day).format('MMM D')})
          </div>
          <IconButton
            color="inherit"
            aria-label="next day"
            onClick={() => setDay(moment(day).add(1, 'days'))}
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
        <div className={clsx('flex', 'flex--align-center', 'flex--column')}>
          <div
            className={clsx(
              classes.paperBody,
              'flex',
              'flex--align-center',
              'flex--column'
            )}
          >
            <div
              className={clsx(
                classes.question,
                'flex',
                'flex--grow',
                'flex--align-center',
                'flex--justify-center'
              )}
            >
              What will be the best performing crypto of tomorrow(
              {moment(day)
                .add(1, 'days')
                .format('MMM D')}
              )?
            </div>
            <div
              className={clsx(classes.heading, 'flex', 'flex--align-center')}
            >
              <div
                className={clsx(
                  classes.headingCell,
                  classes.headingCellBack,
                  'flex',
                  'flex--align-center',
                  'flex--justify-center'
                )}
              >
                BACK
              </div>
              <div
                className={clsx(
                  classes.headingCell,
                  classes.headingCellLay,
                  'flex',
                  'flex--align-center',
                  'flex--justify-center'
                )}
              >
                LAY
              </div>
            </div>
            {COINS.map(coin => (
              <div
                key={coin}
                className={clsx(
                  classes.row,
                  'flex',
                  'flex--align-center',
                  'flex--justify-center'
                )}
              >
                <div
                  className={clsx(
                    classes.rowHeading,
                    'flex',
                    'flex--align-center'
                  )}
                >
                  {coin}
                </div>
                <div className="flex">
                  {backs.map((back, i) => (
                    <div
                      key={back}
                      className={clsx(
                        classes.cell,
                        classes.cellBack,
                        'flex',
                        'flex--align-center',
                        'flex--justify-center',
                        'flex--column',
                        { [classes.cellBackHighlight]: i === 2 }
                      )}
                    >
                      <div>{back}</div>
                      <div className={classes.cellMoney}>${back * 100}</div>
                    </div>
                  ))}
                  {lays.map((lay, i) => (
                    <div
                      key={lay}
                      className={clsx(
                        classes.cell,
                        classes.cellLay,
                        'flex',
                        'flex--align-center',
                        'flex--justify-center',
                        'flex--column',
                        { [classes.cellLayHighlight]: i === 0 }
                      )}
                    >
                      <div>{lay}</div>
                      <div className={classes.cellMoney}>${lay * 100}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default connect(({}) => ({}), mapDispatchToProps)(Component);
