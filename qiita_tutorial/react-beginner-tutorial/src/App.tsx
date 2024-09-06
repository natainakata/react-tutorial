import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const testData = [
    {
      id: 1,
      title: "お金を払う",
      isIncome: false,
      amount: 1000,
    },
    {
      id: 2,
      title: "お金をもらう",
      isIncome: true,
      amount: 1000,
    },
  ];
  let title: string = "";
  let amount: number = 0;
  let isIncome: boolean = false;
  return (
    <ChakraProvider>
      <div>
        <Text fontSize="2xl">家計簿アプリ</Text>
        <Box mb="8px">
          <Input
            placeholder="タイトルを入力"
            mb="4px"
            onChange={(e) => (title = e.target.value)}
          />
          <Input
            placeholder="支出を入力"
            mb="4px"
            onChange={(e) => (amount = Number(e.target.value))}
          />
          <Flex align="center" justifyContent="space-between">
            <Checkbox w="100px" onChange={() => (isIncome = !isIncome)}>
              入金
            </Checkbox>
            <Button
              colorScheme="teal"
              onClick={() => console.log(title, amount, isIncome)}
            >
              追加
            </Button>
          </Flex>
        </Box>
      </div>
      <div>
        {testData.map((data) => (
          <div key={data.id}>
            <Flex align="center" justifyContent="space-between">
              <Text>{data.title}</Text>
              <Text>
                {data.isIncome ? "+" : "-"}
                {data.amount}
              </Text>
            </Flex>
          </div>
        ))}
      </div>
    </ChakraProvider>
  );
}

export default App;
