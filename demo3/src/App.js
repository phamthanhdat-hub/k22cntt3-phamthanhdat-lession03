import logo from './logo.svg';
import './App.css';
import PTD_funcDemo from './components/PTD_funcDemo';
import PTD_ClassComp from './PTD_ClassComp';

function App() {
  //khai bao  bien doi tuong
  const users = {
    usersName:"k22cntt3",
    password:"160924",
    fistName:"Phạm Thành Đạt",
  }
  // khai bao doi tuong ham
  function formatName(user){
    return <h2>Xin chao,{user.fistName} {user.lastName}</h2>
  }

  return (
    <div className="App">
      {/*  bieu thuc jsx*/}
      <div>
        <p>fullName: {users.fullName} {users.className}</p>
        {formatName(users)}
      </div>
      {/* su dung func component*/}
      <div>
        <PTD_funcDemo />
        {/*  su dung Func_comp co props*/}
        <PTD_funcDemo usersName="PTD" fullName="Phạm Thành Đạt" age="20" />

      </div>
        {/*  su dung class component*/}

        <div>
          {/*  dung khong su dung props*/}
          <PTD_ClassComp />
          <PTD_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
          <PTD_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs1" />
          <PTD_ClassComp company="Fit-NTU - K22CNT5" course="ReactJs2" />
          <PTD_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs3" />
        </div>
    </div>
  );
}

export default App;
