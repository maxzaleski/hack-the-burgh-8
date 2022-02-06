import { Shell } from '../components/Layout';

export default function Scoreboard() {
  return (
    <Shell>
      <div>
        Scoreboard
        <table className="table-auto">
          <thead>
            <tr>User</tr>
            <tr>Friends</tr>
            <tr>Points</tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>9</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Amanda Jones</td>
              <td>5</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Jane Jones</td>
              <td>3</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
