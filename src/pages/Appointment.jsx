import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { WebContext } from '../context/WebContext';

const Appointment = () => {
  const { servId } = useParams();
  const { service } = useContext(WebContext);

  const [servInfo, setServInfo] = useState(null);

  const fetchServInfo = async () => {
    const servInfo = service.find(item => item._id === servId);
    setServInfo(servInfo);
    console.log(servInfo);
  };

  useEffect(() => {
    fetchServInfo();
  }, [service, servId]);

  return  servInfo && (
    <div>
      {/* Your JSX code here */}
      <div>
        <div>
          <img src={servInfo} alt="" />
        </div>

        <div>
            {/* Your JSX code here */}
            <p>{servInfo?.name}</p>

        </div>
      </div>
    </div>
  );
};

export default Appointment;