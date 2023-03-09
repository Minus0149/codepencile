'use client';

import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/nord.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa';

const Editor = (props) => {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-button"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaCompressAlt /> : <FaExpandAlt />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'nord',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
