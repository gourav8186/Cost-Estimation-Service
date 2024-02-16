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
    data: ["Model1", "Model2", "Model3"],
  },
  {
    label: "Select Your Series",
    data: ["T Series", "V Series", "Z Series", "X Series"],
  },
  {
    label: "Select Your Spare Parts",
    data: ["Part1", "Part2", "Part3"],
  },
  {
    label: "Select State",
    data: ["State1", "State2", "State3"],
  },
  {
    label: "Select City",
    data: ["City1", "City2", "City3"],
  },
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

  const handleCheckboxChange = (dataItem) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [activeStep]: {
        ...prevFormData[activeStep],
        [dataItem]: !prevFormData[activeStep]?.[dataItem],
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
                  {step.data.map((dataItem, dataItemIndex) => (
                    <div key={dataItemIndex} className="list-items my-2">
                      <label
                        htmlFor={`dataItem${dataItemIndex}`}
                        className="series-list-item d-flex justify-content-between px-3"
                      >
                        <span>
                          <input
                            type="checkbox"
                            checked={
                              formData[activeStep]?.[dataItem] || false
                            }
                            onChange={() => handleCheckboxChange(dataItem)}
                            id={`dataItem${dataItemIndex}`}
                          />
                        </span>
                        <span>{dataItem}</span>
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
