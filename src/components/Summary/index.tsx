import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
// import { useTransactions } from "../../hooks/useTransactions";

// import { Container } from "./styles";

export function Summary() {
  // const { transactions } = useTransactions();

  // const summary = transactions.reduce(
  //   (acc, transaction) => {
  //     if (transaction.type === "deposit") {
  //       acc.deposits += transaction.amount;
  //       acc.total += transaction.amount;
  //     } else {
  //       acc.withdraws += transaction.amount;
  //       acc.total -= transaction.amount;
  //     }

  //     return acc;
  //   },
  //   {
  //     deposits: 0,
  //     withdraws: 0,
  //     total: 0,
  //   }
  // );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        {/* <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong> */}
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        {/* <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong> */}
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        {/* <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong> */}
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
