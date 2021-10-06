import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';
import withLocalize, {withLocalizePropTypes} from '../../components/withLocalize';
import {Apple, Bank, NewWindow} from '../../components/Icon/Expensicons';
import UnorderedList from '../../components/UnorderedList';
import MenuItemList from '../../components/MenuItemList';
import {openSignedInLink} from '../../libs/actions/App';
import Icon from '../../components/Icon';

const propTypes = {
    ...withLocalizePropTypes,
};

const WorkspaceCardVBANoECardView = ({translate}) => (
    <>
        <View style={styles.pageWrapper}>
            <View style={[styles.flexRow, styles.alignItemsCenter]}>
                <View style={[styles.flexShrink1]}>
                    <Text style={[styles.textXLarge]}>{translate('workspace.card.header')}</Text>
                </View>
                <View style={[styles.flexGrow1, styles.flexRow, styles.justifyContentEnd]}>
                    {/* TODO: Replace this with the proper icon */}
                    <Icon src={Apple} height={50} width={50} />
                </View>
            </View>

            <View style={[styles.w100]}>
                <View style={[styles.mv4]}>
                    <Text>{translate('workspace.card.VBANoECardCopy')}</Text>
                </View>

                <UnorderedList
                    items={[
                        translate('workspace.card.benefit1'),
                        translate('workspace.card.benefit2'),
                        translate('workspace.card.benefit3'),
                        translate('workspace.card.benefit4'),
                    ]}
                />
            </View>
        </View>

        <MenuItemList
            menuItems={[
                {
                    title: translate('workspace.common.addWorkEmailAddress'),
                    onPress: () => openSignedInLink('settings?param={"section":"account","openModal":"secondaryLogin"})'),
                    /* TODO: Need to use the briefcase icon once it's added to the repo */
                    icon: Bank,
                    shouldShowRightIcon: true,
                    iconRight: NewWindow,
                },
            ]}
        />
    </>
);

WorkspaceCardVBANoECardView.propTypes = propTypes;
WorkspaceCardVBANoECardView.displayName = 'WorkspaceCardVBANoECardView';

export default withLocalize(WorkspaceCardVBANoECardView);
