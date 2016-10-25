import React from 'react';
import {NOTE_NAMES} from '../../util/tones';
import {TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component{

  constructor(props){
    super(props);
    this.notes = NOTE_NAMES.map(e => new Note(TONES[e]));
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  noteCreator(){
    return this.notes.map((e,i) => <li key={i}>{NoteKey({note: NOTE_NAMES[i]})}</li>);
  }

  onKeyDown(e){
    this.props.keyPressed(e.key);
  }

  onKeyUp(e){
    this.props.keyReleased(e.key);
  }

  componentDidMount(){
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes(){

    let that = this;
    this.notes.forEach((e,i)=>{
      if(that.props.notes.includes(NOTE_NAMES[i])){
        e.start();
      }else{
        e.stop();
      }
    });
  }

  render(){
    this.playNotes();
    return(
      <div>
        <ul>
          {this.noteCreator()}
        </ul>
      </div>
    );
  }
}

export default Synth;
