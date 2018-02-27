/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContainer">
          <div className="mainPageContainer">

            <img src="https://i.imgur.com/WTngZzF.png" />

            <div className="subtitle">Online Documentation</div>

            <div>Version 7.0</div>

            <div>Publication date February 2017</div>

            <div>Copyright © 2017 Open Systems Pharmacology Suite Community</div>

            <div>License Owners of Open Systems Pharmacology Suite are allowed to print and use the PK-Sim® User Manual without fee, provided that the
            above copyright notice and this paragraph appear in all copies.
            The manual is provided “as is” without expressed or implied warranty. You may not modify it in any way.</div>

            <div>Trademark information: All trademarks within this manual belong to their legitimate owners.</div>
            
            <div>PK-Sim® and MoBi® use the CVODE solver: ©2002 The Regents of the University of California. Produced at the Lawrence Livermore National Laboratory (LLNL).</div>

            <div>Please, refer to the LLNL website for detailed information on licensing: <a href="http://www.llnl.gov/CASC/sundials/download/license.html">http://www.llnl.gov/CASC/sundials/download/license.html</a></div>

            <div>Internet:</div>

            <ul>
              <li>
                <a href="http://www.systems-biology.com">http://www.systems-biology.com</a>
              </li>
              <li>
                <a href="http://www.pk-sim.com">http://www.pk-sim.com</a>
              </li>
              <li>
                <a href="https://github.com/Open-Systems-Pharmacology">https://github.com/Open-Systems-Pharmacology</a>
              </li>
            </ul>

            <div>Email:</div>

            <ul>
              <li>
                <a href="mailto:support@systems-biology.com">support@systems-biology.com</a> (for technical support)
              </li>
              <li>
                <a href="mailto:info@systems-biology.com">info@systems-biology.com</a> (for general information)
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
