import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Select Your Model",
  },
  {
    label: "Select Your Series",
  },
  {
    label: "Select Your Spare Parts",
  },
  {
    label: "Select State",
  },
  {
    label: "Select City",
  },
];

const seriesList = [
  "T Series",
  "V Series",
  "Z Series",
  "X Series",
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({});
  };

  const handleCheckboxChange = (series) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [activeStep]: {
        ...prevFormData[activeStep],
        [series]: !prevFormData[activeStep]?.[series],
      },
    }));
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <form>
                <div className="ModelBox p-3">
                  {seriesList.map((series, seriesIndex) => (
                    <div key={seriesIndex} className="list-items my-2">
                      <label
                        htmlFor={`series${seriesIndex}`}
                        className="series-list-item d-flex justify-content-between px-3"
                      >
                        <span>
                          <input
                            type="checkbox"
                            checked={
                              formData[activeStep]?.[series] || false
                            }
                            onChange={() => handleCheckboxChange(series)}
                            id={`series${seriesIndex}`}
                          />
                        </span>
                        <span>{series}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </form>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
