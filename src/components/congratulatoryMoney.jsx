import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import { CheckCircleTwoTone, PhoneTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../assets/flower3.png";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
  GROOM_PHONE,
  GROOM_FATHER_PHONE,
  GROOM_MOTHER_PHONE,
  BRIDE_PHONE,
  BRIDE_FATHER_PHONE,
  BRIDE_MOTHER_PHONE,
} from "../../config";

const RowWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px; /* 버튼 간격 조정 */
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const SubContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-wrap: wrap; /* 버튼 줄바꿈 가능 */
  gap: 10px;
  justify-content: center;
  text-align: center;
`;

const ContactButton = styled.div`
  width: 10.75rem;
  border: 1px solid #efddde;
  padding: 2.188rem 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);
  const [groomPhoneVisible, setGroomPhoneVisible] = useState(false);
  const [bridePhoneVisible, setBridePhoneVisible] = useState(false);

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>축하의 마음을 전하세요</Title>
      </Divider>
      <Image src={Flower} />
      <Content data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </Content>

      {/* 계좌번호 버튼 */}
      <ButtonWrap>
        <RowWrap>
          <ContactButton
            data-aos="fade-up"
            onClick={() => setGroomVisible(true)}
          >
            <CheckCircleTwoTone
              style={{ fontSize: 64, marginBottom: 16 }}
              twoToneColor="#829fe0"
            />
            <br />
            <SubContent>신랑측 계좌번호</SubContent>
          </ContactButton>
          <ContactButton
            data-aos="fade-up"
            onClick={() => setBrideVisible(true)}
          >
            <CheckCircleTwoTone
              style={{ fontSize: 64, marginBottom: 16 }}
              twoToneColor="#fe7daf"
            />
            <br />
            <SubContent>신부측 계좌번호</SubContent>
          </ContactButton>
        </RowWrap>

        {/* 연락처 버튼 (통합) */}
        <RowWrap>
          <ContactButton
            data-aos="fade-up"
            onClick={() => setGroomPhoneVisible(true)}
          >
            <PhoneTwoTone
              style={{ fontSize: 64, marginBottom: 16 }}
              twoToneColor="#829fe0"
            />
            <br />
            <SubContent>신랑측 연락처</SubContent>
          </ContactButton>
          <ContactButton
            data-aos="fade-up"
            onClick={() => setBridePhoneVisible(true)}
          >
            <PhoneTwoTone
              style={{ fontSize: 64, marginBottom: 16 }}
              twoToneColor="#fe7daf"
            />
            <br />
            <SubContent>신부측 연락처</SubContent>
          </ContactButton>
        </RowWrap>
      </ButtonWrap>

      {/* 신랑 계좌번호 모달 */}
      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[<Description>계좌번호 클릭 시 복사됩니다.</Description>]}
      >
        <div>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>

      {/* 신부 계좌번호 모달 */}
      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[<Description>계좌번호 클릭 시 복사됩니다.</Description>]}
      >
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>

      {/* 신랑 연락처 모달 (통합) */}
      <Modal
        title={<b>신랑측 연락처</b>}
        visible={groomPhoneVisible}
        onOk={() => setGroomPhoneVisible(false)}
        onCancel={() => setGroomPhoneVisible(false)}
        footer={[<Description>전화번호 클릭 시 복사됩니다.</Description>]}
      >
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_PHONE}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {GROOM_PHONE}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_PHONE}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {GROOM_FATHER_PHONE}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_PHONE}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {GROOM_MOTHER_PHONE}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>

      {/* 신부 연락처 모달 (통합) */}
      <Modal
        title={<b>신부측 연락처</b>}
        visible={bridePhoneVisible}
        onOk={() => setBridePhoneVisible(false)}
        onCancel={() => setBridePhoneVisible(false)}
        footer={[<Description>전화번호 클릭 시 복사됩니다.</Description>]}
      >
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_PHONE}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {BRIDE_PHONE}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_PHONE}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {BRIDE_FATHER_PHONE}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_PHONE}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              {BRIDE_MOTHER_PHONE}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;