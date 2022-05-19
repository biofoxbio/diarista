import Head from 'next/head'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/safeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitle/pageTitle';

export default function Home() {
  return (
  <div>
    < SafeEnvironment />
    <PageTitle title = {'Conheça os Profissionais ' } 
    subtitle={'Preencha seu endereço e veja todos os proficionais da sua localidade'}
    />
  </div>
  );
}
