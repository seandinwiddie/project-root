class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      race: '',
      class: '',
      level: 1,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Create a new DnD character</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Race:
            <input type="text" name="race" value={this.state.race} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Class:
            <input type="text" name="class" value={this.state.class} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Level:
            <input type="number" name="level" value={this.state.level} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Strength:
            <input type="number" name="strength" value={this.state.strength} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Dexterity:
            <input type="number" name="dexterity" value={this.state.dexterity} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Constitution:
            <input type="number" name="constitution" value={this.state.constitution} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Intelligence:
            <input type="number" name="intelligence" value={this.state.intelligence} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Wisdom:
            <input type="number" name="wisdom" value={this.state.wisdom} onChange={this.handleChange.bind(this)} />
          </label>
          <br />
          <label>
            Charisma:
            <input type="number" name="charisma" value={this.state.charisma} onChange={this.handleChange.bind(this)} />
          </label>
        </form>
        <h2>Character Sheet</h2>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Race: {this.state.race}</li>
          <li>Class: {this.state.class}</li>
          <li>Level: {this.state.level}</li>
          <li>Strength: {this.state.strength}</li>
          <li>Dexterity: {this.state.dexterity}</li>
          <li>Constitution: {this.state.constitution}</li>
          <li>Intelligence: {this.state.intelligence}</li>
          <li>Wisdom: {this.state.wisdom}</li>
          <li>Charisma: {this.state.charisma}</li>
        </ul>
      </div>
    );
  }
}
