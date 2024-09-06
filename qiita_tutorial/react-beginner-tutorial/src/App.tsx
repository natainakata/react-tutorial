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
import { useEffect, useState } from "react";

type Record = {
  id: number;
  title: string;
  isIncome: boolean;
  amount: number;
};

function App() {
  const [records, setRecords] = useState<Record[]>([]);
  const [title, setTitle] = useState<string>("");
  const [isIncome, setIsIncome] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    getRecords();

    async function getRecords() {
      const response = await fetch("http://localhost:3000/records");
      const data = await response.json();
      setRecords(data);
    }
  }, []);

  const addRecord = () => {
    const newRecord: Record = {
      id: records.length + 1,
      title: title,
      amount: amount || 0,
      isIncome: isIncome,
    };
    setRecords([...records, newRecord]);
    setTitle("");
    setAmount(0);
    setIsIncome(false);
  };

  return (
    <ChakraProvider>
      <div>
        <Text fontSize="2xl">家計簿アプリ</Text>
        <Box mb="8px">
          <Input
            placeholder="タイトルを入力"
            mb="4px"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Input
            placeholder="支出を入力"
            mb="4px"
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount}
          />
          <Flex align="center" justifyContent="space-between">
            <Checkbox
              w="100px"
              onChange={() => setIsIncome(!isIncome)}
              isChecked={isIncome}
            >
              入金
            </Checkbox>
            <Button colorScheme="teal" onClick={addRecord}>
              追加
            </Button>
          </Flex>
        </Box>
      </div>
      <div>
        {records.map((data) => (
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
