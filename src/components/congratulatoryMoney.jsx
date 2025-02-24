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

      {/* ✅ 계좌번호 버튼 (가로 정렬) */}
      <ButtonWrap>
        <RowWrap>
          <ContactButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
            <CheckCircleTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#829fe0" />
            <br />
            <SubContent>신랑측 계좌번호</SubContent>
          </ContactButton>
          <ContactButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
            <CheckCircleTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#fe7daf" />
            <br />
            <SubContent>신부측 계좌번호</SubContent>
          </ContactButton>
        </RowWrap>

        {/* ✅ 연락처 버튼 (가로 정렬) */}
        <RowWrap>
          <ContactButton data-aos="fade-up" onClick={() => setGroomPhoneVisible(true)}>
            <PhoneTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#829fe0" />
            <br />
            <SubContent>신랑 연락처</SubContent>
          </ContactButton>
          <ContactButton data-aos="fade-up" onClick={() => setBridePhoneVisible(true)}>
            <PhoneTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#fe7daf" />
            <br />
            <SubContent>신부 연락처</SubContent>
          </ContactButton>
        </RowWrap>
      </ButtonWrap>

      {/* ✅ 신랑 계좌번호 Modal */}
      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[<Description>계좌번호 클릭 시 복사됩니다.</Description>]}
      >
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

      {/* ✅ 신부 계좌번호 Modal */}
      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[<Description>계좌번호 클릭 시 복사됩니다.</Description>]}
      >
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

      {/* ✅ 신랑 연락처 Modal */}
      <Modal
        title={<b>신랑 연락처</b>}
        visible={groomPhoneVisible}
        onOk={() => setGroomPhoneVisible(false)}
        onCancel={() => setGroomPhoneVisible(false)}
        footer={[<Description>전화번호 클릭 시 복사됩니다.</Description>]}
      >
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"010-1234-5678"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              010-4129-0738
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>

      {/* ✅ 신부 연락처 Modal */}
      <Modal
        title={<b>신부 연락처</b>}
        visible={bridePhoneVisible}
        onOk={() => setBridePhoneVisible(false)}
        onCancel={() => setBridePhoneVisible(false)}
        footer={[<Description>전화번호 클릭 시 복사됩니다.</Description>]}
      >
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={"010-9876-5432"}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success("전화번호가 복사되었습니다.")}
            >
              010-9965-9818
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
