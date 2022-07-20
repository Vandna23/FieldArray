import React from "react";
import { Canvas, Edge } from "reaflow";

const Tree = () => (
  <div className="bg-gray-800">
    <Canvas
      maxWidth={800}
      arrow={null}
      maxHeight={1000}
      direction="DOWN"
      layoutOptions={{
        "elk.nodeLabels.placement": "INSIDE V_CENTER H_RIGHT",
        "elk.algorithm": "org.eclipse.elk.layered",
        // 'elk.direction': 'DOWN',
        nodeLayering: "INTERACTIVE",
        "org.eclipse.elk.edgeRiuting": "ORTHOGONAL",
        "elk.layered.unnecessaryBendpoints": "true",
        "elk.layered.spacing.edgeNodeBetweenLayers": "20",
        "org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
        "org.eclipse.elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
        "org.eclipse.elk.insideSelfLoops.activate": "true",
        separateConnectedComponents: "false",
        "spacing.componentComponent": "40",
        spacing: "45",
        "spacing.nodeNodeBetweenLayers": "40",
      }}
      edge={<Edge className="edge" />}
      nodes={[
        {
          id: "1",
          text: "owner",
          width: 154,
          height: 100,
        },
        {
          id: "2",
          text: "Crypto Currency",
          width: 162,
          height: 82,
        },
        {
          id: "3",
          text: "NFt",
          width: 162,
          height: 82,
        },
        {
          id: "4",
          text: "Real Estate",
          width: 162,
          height: 82,
        },
        {
          id: "5",
          text: " 4 Type ",
          width: 112,
          height: 72,
        },
        {
          id: "6",
          text: "Wallet 1",
          width: 112,
          height: 72,
        },
        {
          id: "7",
          text: "1 GORO",
          width: 112,
          height: 72,
        },
        {
          id: "8",
          text: "WITS LAB",
          width: 112,
          height: 72,
        },
        {
          id: "9",
          text: "Fiduciary",
          width: 132,
          height: 72,
        },
        {
          id: "10",
          text: "Beneficiary",
          width: 149,
          height: 82,
        },
        {
          id: "11",
          text: "ABC",
          width: 112,
          height: 72,
        },
      ]}
      edges={[
        {
          id: "1-2",
          from: "1",
          to: "2",
          // text: "done2222",
          arrowHeadType: "arrow",
        },
        {
          id: "6-7",
          from: "6",
          to: "7",
          // text: "abandoned"
        },

        {
          id: "1-3",
          from: "1",
          to: "3",
          // text: "done"
        },
        {
          id: "2-5",
          from: "2",
          to: "5",
        },

        {
          id: "5-6",
          from: "5",
          to: "6",
        },
        {
          id: "1-4",
          from: "1",
          to: "4",
        },
        {
          id: "6-8",
          from: "6",
          to: "8",
        },
        {
          id: "11-9",
          from: "11",
          to: "9",
        },
        {
          id: "8-9",
          from: "8",
          to: "9",
        },
        {
          id: "7-9",
          from: "7",
          to: "9",
        },

        {
          id: "9-10",
          from: "9",
          to: "10",
        },

        {
          id: "6-11",
          from: "6",
          to: "11",
        },
      ]}
    />
  </div>
);

export default Tree;
