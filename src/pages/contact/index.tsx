import { FC } from 'react';
import styled from 'styled-components';

import { MainLayout, RGBLayout } from '../../layouts';

const CustomInput = styled.input(
  {
    backgroundColor: '#666',
    borderRadius: 10,
    padding: 10,
    border: 'none',
    outline: 'none',
    color: '#fff',
  },
  ({ theme }) => `
${theme.breakpoints.xl} {
  width: 300px;
}
`
);

const CustomTextarea = styled.textarea({
  backgroundColor: '#666',
  borderRadius: 10,
  padding: 10,
  border: 'none',
  outline: 'none',
  color: '#fff',
  resize: 'vertical',
});

const BtnContainer = styled.div(
  ({ theme }) => `
    display: flex;
    justify-content: center;
    margin-top: 10px;
    ${theme.breakpoints.xl} {
     justify-content: flex-end;
    }
`
);

const CustomBtn = styled.button(
  {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: '10px 40px',
    border: 'none',
    outline: 'none',
    color: '#000',
    fontSize: 16,
    width: '100%',
  },
  ({ theme }) => `
  ${theme.breakpoints.xl} {
    width: auto;
  }
`
);

const NameAndEmailContainer = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'normal',
    gap: 20,
    marginBottom: 20,
  },
  ({ theme }) => `
${theme.breakpoints.xl} {
  flex-direction: row;
  align-items: center;
}
`
);

const Title = styled.h1(
  ({ theme }) => `
  text-align: center;
  margin-bottom: 30px;
  ${theme.breakpoints.xl} {
    text-align: left;
  }
`
);

const InputWithLabelContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

const InputWithLabel: FC<{ label: string; name: string }> = ({
  label,
  name,
}) => {
  return (
    <InputWithLabelContainer>
      <span>{label}</span>
      <CustomInput type="text" name={name} />
    </InputWithLabelContainer>
  );
};

const Content: FC = () => {
  return (
    <RGBLayout>
      <Title>Contact Me</Title>
      <div>
        <form
        //  action={onSend}
        >
          <NameAndEmailContainer>
            <InputWithLabel label="Name" name="name" />
            <InputWithLabel label="Email" name="email" />
          </NameAndEmailContainer>
          <InputWithLabelContainer>
            <span>Message</span>
            <CustomTextarea rows={5} />
          </InputWithLabelContainer>
          <BtnContainer>
            <CustomBtn>Send</CustomBtn>
          </BtnContainer>
        </form>
      </div>
    </RGBLayout>
  );
};

const ContactPage: FC = () => {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  );
};

export default ContactPage;
