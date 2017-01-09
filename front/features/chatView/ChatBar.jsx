import React from 'react';
import {CompositeDecorator, Editor, EditorState, RichUtils} from 'draft-js';
import {socket} from '../../socket';
import _ from 'lodash';

const sendMessage = (contentBlock) => {
  console.log("contentBlock", contentBlock)
}

export default class ChatBar extends React.Component{

  constructor(props) {
    super(props);

    //takes a portion of testbased off of functions given in strategy. Then it wraps a component around a block of text{props.children} and changes styles

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: HandleSpan,
      },
      {
        strategy: hashtagStrategy,
        component: HashtagSpan,
      },
    ]);
    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator
    )};

    this.onChange = (editorState) => this.setState({editorState});

    //used for better ux. highlight box
    this.focus = () => this.refs.editor.focus();

    //.toJS logs state into readable content.
    this.logState = () => console.log(this.state.editorState.toJS());
  };

  handleChange(event){
    this.props.inputAction(event.target.value)
  };

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      "BOLD"
    ));
  }

  sendMessages(contentBlock){
    const {input} = this.props;
    const channels = "test";
    const text = contentBlock.getText();
    console.log(text)
    socket.emit('message', {room: channels, msg:input, UserId: 1, ChatroomId: 1, username: "Slackers"})
  };

  render() {
    return (
      <div className="chat_bar">
        <input 
          type='text'
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={()=> sendMessage(this.props.input)}>Send</button>
        {/*<h1>Draft.js Editor</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Send a message"
            ref="editor"
            spellCheck={true}
            sendMessageFunction={sendMessage}
          />
        </div>
        <button onClick={this.logState}>logState</button>*/}
      </div>
    )
  }
}

const HANDLE_REGEX = /\@[\w]+/g;
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;
//const HASHTAG_REGEX = (\#[a-z\d-]+);

function handleStrategy(contentBlock, callback, contentState) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback, contentState) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const HandleSpan = (props) => {
  return (
    <span
      style={styles.handle}
      data-offset-key={props.offsetKey}
    >
      {props.children}
    </span>
  );
};

const HashtagSpan = (props) => {
  return (
    <span
      style={styles.hashtag}
      data-offset-key={props.offsetKey}
    >
      {props.children}
    </span>
  );
};

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 40,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  handle: {
    color: 'rgba(98, 177, 254, 1.0)',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
  hashtag: {
    color: 'rgba(95, 184, 138, 1.0)',
  },
};
