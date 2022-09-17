import React, { useRef } from 'react';
import {
  Dropdown,
  Popover,
  Whisper,
  WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton
} from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import GithubIcon from '@rsuite/icons/legacy/Github';

//Menu Utilisateur
const renderAdminSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Connecté en tant que</p>
          <strong>NOM DE L'UTILISATEUR</strong>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Profil & compte</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Paramètres</Dropdown.Item>
        <Dropdown.Item>Se déconnecter</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

//Notifications
const renderNoticeSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const notifications = [
    [
      'Il y a 7 heures',
      'Super test des notifs.'
    ],
    [
      'Il y a 13 heures',
      'Second test des notifs.'
    ],
    [
      'Il y a 3 jours',
      'Troisième test des notifs.'
    ]
  ];

  // Notifications Année prochaine
  return (
    <Popover ref={ref} className={className} style={{ left, top, width: 300 }} title="Feature non disponible">
      {/* <List>
        {notifications.map((item, index) => {
          const [time, content] = item;
          return (
            <List.Item key={index}>
              <Stack spacing={4}>
                <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
              </Stack>

              <p>{content}</p>
            </List.Item>
          );
        })}
      </List>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button onClick={onClose}>Plus de notifications</Button>
      </div> */}
      <div>Maintenance</div>
    </Popover>
  );
};

const Header = () => {
  const trigger = useRef<WhisperInstance>(null);

  return (
    <Stack className="header" spacing={8}>
      {/* Ajouter le github de l'utilisateur */}
      <IconButton
        icon={<GithubIcon style={{ fontSize: 20 }} />}
        href="https://github.com/Virtual-Spaces-for-Students"
        target="_blank"
      />

      {/* Gérer les notifs */}
      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderNoticeSpeaker}>
        <IconButton
          icon={
            <Badge content={5}>
              <NoticeIcon style={{ fontSize: 20 }} />
            </Badge>
          }
        />
      </Whisper>

      {/* Avatar de l'utilisateur */}
      <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
        <Avatar
          size="sm"
          circle
          src="https://avatars.githubusercontent.com/u/62929512?v=4"
          alt="@Machurui"
          style={{ marginLeft: 8 }}
        />
      </Whisper>
    </Stack>
  );
};

export default Header;
