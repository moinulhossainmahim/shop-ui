import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StatusType } from '../OrderStatusChip/OrderStatusChip';
import { renderStatus } from '../../utils/renderStatus';

interface Props {
  activeStatus : StatusType | undefined;
}

export default function OrderStatusStepper({ activeStatus } : Props) {
  const steps = ['Pending', 'Processing', 'At Local Facility', 'Out For Delivery', 'Completed'];
  const newSteps = steps.map((step, index) => {
    if(index === 4 && activeStatus === StatusType.Canceled) return 'Order Canceled';
    else return step;
  })
  return (
    <Box sx={{ padding: '4rem', backgroundColor: 'white', width: '100%' }}>
      <Stepper activeStep={renderStatus(activeStatus || '')} orientation='vertical'>
        {newSteps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
